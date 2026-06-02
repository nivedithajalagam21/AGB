#!/usr/bin/env python3
"""Generate assets/data/leaderboard.js from AGB paper appendix tables."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SUPP = ROOT / "tmp_agb_supp.txt"
MAIN = ROOT / "tmp_agb_paper.txt"
OUT = ROOT / "assets/data/leaderboard.js"
OUT_DATA = ROOT / "data/leaderboard.js"

METHODS = ["L1D-RND", "FGA", "NETTACK", "PGD", "PR-BCD (NA)", "SGA", "GOttack"]
METHOD_DISPLAY = {
    "L1D-RND": "L1D-RND",
    "FGA": "FGA",
    "NETTACK": "Nettack",
    "PGD": "PGD",
    "PR-BCD (NA)": "PR-BCD",
    "SGA": "SGA",
    "GOttack": "GOttack",
}

PAIR_RE = re.compile(r"(\d+\.\d{2})\s*±\s*(\d+\.\d{2})")


def fmt_num(s: str) -> str:
    return f"{float(s):.2f}"


def pairs(line: str) -> list[tuple[str, str]]:
    return [(fmt_num(m), fmt_num(s)) for m, s in PAIR_RE.findall(line)]


def cell(mean: str, std: str) -> dict[str, str]:
    return {"mean": mean, "std": std}


def entry(method_key: str, budget_values: list[tuple[str, str]]) -> dict:
    row = {"method": METHOD_DISPLAY[method_key], "attackTime": ""}
    for i, (m, s) in enumerate(budget_values[:5], start=1):
        row[f"budget{i}"] = cell(m, s)
    return row


def slice_table(text: str, start: str, end: str) -> str:
    i = text.index(start)
    j = text.index(end, i + len(start)) if end in text[i + len(start) :] else len(text)
    return text[i:j]


def method_line_values(line: str, method: str) -> list[tuple[str, str]] | None:
    idx = line.find(method)
    if idx < 0:
        return None
    return pairs(line[idx + len(method) :])


def block_rows(section: str, victim: str, datasets: list[str]) -> dict[str, dict[str, list[tuple[str, str]]]]:
    """Return {method: {dataset: [5 budget pairs]}} from a multi-dataset table block."""
    out: dict[str, dict[str, list[tuple[str, str]]]] = {m: {} for m in METHODS}
    in_section = False
    in_victim = False
    for line in section.splitlines():
        line = line.strip()
        if line in ("Evasion", "Poison"):
            in_section = True
            in_victim = False
            continue
        if not in_section:
            continue
        if line in ("GCN", "GIN", "GSAGE", "PNA", "GNNGuard", "RUNG", "ElasticGNN", "GCN-GARNET", "GCN-Jaccard"):
            in_victim = line == victim
            continue
        if not in_victim:
            continue
        for method in METHODS:
            vals = method_line_values(line, method)
            if vals and len(vals) >= 5 * len(datasets):
                chunk = 5
                for di, ds in enumerate(datasets):
                    out[method][ds] = vals[di * chunk : (di + 1) * chunk]
    return out


def single_dataset_rows(section: str, victim: str) -> dict[str, list[tuple[str, str]]]:
    out: dict[str, list[tuple[str, str]]] = {}
    in_section = False
    in_victim = False
    for line in section.splitlines():
        line = line.strip()
        if line.startswith("Evasion") or line.startswith("Poison"):
            in_section = True
            in_victim = False
            continue
        if line.startswith("Poison") and "GCN" in section:
            in_section = True
            in_victim = False
            continue
        if not in_section:
            continue
        if line in ("GCN", "GIN", "GSAGE", "PNA", "GNNGuard", "RUNG"):
            in_victim = line == victim
            continue
        if not in_victim:
            continue
        for method in METHODS:
            vals = method_line_values(line, method)
            if vals and len(vals) >= 5:
                out[method] = vals[:5]
    return out


def heterophily_compact_rows(block: str, setting: str, victim: str) -> dict[str, list[tuple[str, str]]]:
    """Parse compact heterophily table lines (Table 19/20)."""
    out: dict[str, list[tuple[str, str]]] = {}
    for key in (f"{setting}{victim}", f"{setting} {victim}"):
        idx = block.find(key)
        if idx >= 0:
            break
    else:
        return out
    part = block[idx + len(key) :]
    stop_keys = ["PoisonGCN", "Poison GCN", "PoisonGSAGE", "Poison GSAGE", "EvasionGSAGE", "Evasion GSAGE", "GIN", "Table "]
    if setting == "Evasion":
        stop_keys = ["PoisonGCN", "Poison GCN", "EvasionGSAGE", "Evasion GSAGE", "GIN\n", "GIN", "Table "]
    stop = len(part)
    for sk in stop_keys:
        si = part.find(sk)
        if si > 0:
            stop = min(stop, si)
    chunk = part[:stop]

    for mi, method in enumerate(METHODS):
        m_idx = chunk.find(method)
        if m_idx < 0:
            continue
        rest = chunk[m_idx + len(method) :]
        next_m = len(rest)
        for other in METHODS[mi + 1 :]:
            oi = rest.find(other)
            if 0 <= oi < next_m:
                next_m = oi
        vals = pairs(rest[:next_m])
        if len(vals) >= 5:
            out[method] = vals[:5]
    return out


def parse_table19_20(text: str, table_label: str, dataset: str) -> tuple[dict, dict]:
    start = text.index(table_label)
    end = text.index("Table ", start + len(table_label) + 1)
    block = text[start:end]
    evasion = {}
    poison = {}
    for setting, target in (("Evasion", evasion), ("Poison", poison)):
        for victim in ("GCN", "GSAGE"):
            rows = heterophily_compact_rows(block, setting, victim)
            if rows:
                target[victim] = rows
    # GCN-only tables also have GIN in chameleon - website uses GCN only
    return evasion.get("GCN", {}), poison.get("GCN", {})


def parse_table25_rung(text: str) -> tuple[dict, dict]:
    block = slice_table(text, "Table 25:", "Table 26:")
    evasion: dict[str, list[tuple[str, str]]] = {}
    poison: dict[str, list[tuple[str, str]]] = {}
    mode = None
    in_rung = False
    for line in block.splitlines():
        line = line.strip()
        if line == "Evasion":
            mode = "evasion"
            in_rung = False
            continue
        if line == "Poison":
            mode = "poison"
            in_rung = False
            continue
        if line == "RUNG":
            in_rung = True
            continue
        if line in ("GRAND", "RobustGCN", "GCORN", "ElasticGNN", "GCN-GARNET", "GNNGuard"):
            in_rung = False
            continue
        if not in_rung or mode is None:
            continue
        for method in METHODS:
            vals = method_line_values(line, method)
            if vals and len(vals) >= 10:
                target = evasion if mode == "evasion" else poison
                target[method] = vals[:5]  # SQUIRREL only in first 5; same for CHAMELEON in next 5
                # Website has separate groups per dataset — split below
    # Re-parse with dataset split (SQUIRREL | CHAMELEON)
    evasion_sq: dict[str, list[tuple[str, str]]] = {}
    evasion_ch: dict[str, list[tuple[str, str]]] = {}
    poison_sq: dict[str, list[tuple[str, str]]] = {}
    poison_ch: dict[str, list[tuple[str, str]]] = {}
    mode = None
    in_rung = False
    for line in block.splitlines():
        line = line.strip()
        if line == "Evasion":
            mode = "evasion"
            in_rung = False
            continue
        if line == "Poison":
            mode = "poison"
            in_rung = False
            continue
        if line == "RUNG":
            in_rung = True
            continue
        if line in ("GRAND", "RobustGCN", "GCORN", "ElasticGNN", "GCN-GARNET", "GNNGuard", "NoisyGNN"):
            in_rung = False
            continue
        if not in_rung or mode is None:
            continue
        for method in METHODS:
            vals = method_line_values(line, method)
            if vals and len(vals) >= 10:
                sq, ch = vals[:5], vals[5:10]
                if mode == "evasion":
                    evasion_sq[method] = sq
                    evasion_ch[method] = ch
                else:
                    poison_sq[method] = sq
                    poison_ch[method] = ch
    return {
        "SQUIRREL": {"Evasion": evasion_sq, "Poison": poison_sq},
        "CHAMELEON": {"Evasion": evasion_ch, "Poison": poison_ch},
    }


def parse_table18_gcn(text: str) -> tuple[dict, dict]:
    block = slice_table(text, "Table 18:", "Table 19:")
    poison_at = block.index("Poison")
    evasion = block_rows(block[:poison_at], "GCN", ["CORA", "CITESEER", "PUBMED"])
    poison = block_rows(block[poison_at:], "GCN", ["CORA", "CITESEER", "PUBMED"])
    return evasion, poison


def parse_table21_gnn_guard(text: str) -> tuple[dict, dict]:
    block = slice_table(text, "Table 21:", "Table 22:")
    poison_at = block.index("Poison")
    evasion = block_rows(block[:poison_at], "GNNGuard", ["CORA", "CITESEER", "PUBMED"])
    poison = block_rows(block[poison_at:], "GNNGuard", ["CORA", "CITESEER", "PUBMED"])
    return evasion, poison


def parse_table4_ogb(text: str) -> dict:
    block = slice_table(text, "Table 4:", "1\n2 3 4 5 Budget")
    result: dict[str, dict[str, dict[str, list[tuple[str, str]]]]] = {
        "GCN": {"Evasion": {}, "Poisoning": {}},
        "GSAGE": {"Evasion": {}, "Poisoning": {}},
    }
    mode = None
    for line in block.splitlines():
        line = line.strip()
        if line == "Evasion":
            mode = "Evasion"
            continue
        if line == "Poison":
            mode = "Poisoning"
            continue
        if mode is None:
            continue
        for method in ["L1D-RND", "PR-BCD (NA)", "SGA"]:
            vals = method_line_values(line, method)
            if vals and len(vals) >= 10:
                result["GCN"][mode][method] = vals[:5]
                result["GSAGE"][mode][method] = vals[5:10]
    return result


def make_group(section, dataset, victim, setting, method_data: dict[str, list[tuple[str, str]]]) -> dict:
    entries = []
    for method in METHODS:
        if method not in method_data:
            continue
        entries.append(entry(method, method_data[method]))
    return {
        "section": section,
        "dataset": dataset,
        "victim": victim,
        "setting": setting,
        "entries": entries,
    }


def js_cell(c: dict) -> str:
    return f'{{ mean: "{c["mean"]}", std: "{c["std"]}" }}'


def js_entry(e: dict) -> str:
    budgets = ",\n".join(f"        budget{i}: {js_cell(e[f'budget{i}'])}" for i in range(1, 6))
    return f"""      {{
        method: "{e["method"]}",
{budgets},
        attackTime: "{e["attackTime"]}"
      }}"""


def js_group(g: dict) -> str:
    entries = ",\n".join(js_entry(e) for e in g["entries"])
    return f"""  {{
    section: "{g["section"]}",
    dataset: "{g["dataset"]}",
    victim: "{g["victim"]}",
    setting: "{g["setting"]}",
    entries: [
{entries}
    ]
  }}"""


def parse_heterophily_table(text: str, table_label: str) -> dict:
    """Parse Table 19 or 20 compact format for GCN evasion/poison."""
    start = text.index(table_label)
    end = text.index("Table ", start + len(table_label) + 1)
    block = text[start:end]
    evasion = heterophily_compact_rows(block, "Evasion", "GCN")
    poison = heterophily_compact_rows(block, "Poison", "GCN")
    return {"Evasion": evasion, "Poison": poison}


def main() -> None:
    supp = SUPP.read_text(encoding="utf-8")
    main_text = MAIN.read_text(encoding="utf-8")

    groups: list[dict] = []

    ev18, po18 = parse_table18_gcn(supp)
    ev21, po21 = parse_table21_gnn_guard(supp)

    for ds in ("CORA", "CITESEER", "PUBMED"):
        groups.append(make_group("Homophily Results", ds, "GCN", "Evasion", {m: ev18[m][ds] for m in METHODS if ds in ev18[m]}))
        groups.append(make_group("Homophily Results", ds, "GCN", "Poisoning", {m: po18[m][ds] for m in METHODS if ds in po18[m]}))
        groups.append(make_group("Homophily Results", ds, "GNNGuard", "Evasion", {m: ev21[m][ds] for m in METHODS if ds in ev21[m]}))
        groups.append(make_group("Homophily Results", ds, "GNNGuard", "Poisoning", {m: po21[m][ds] for m in METHODS if ds in po21[m]}))

    sq19 = parse_heterophily_table(supp, "Table 19:")
    ch20 = parse_heterophily_table(supp, "Table 20:")
    groups.append(make_group("Heterophily Results", "SQUIRREL", "GCN", "Evasion", sq19["Evasion"]))
    groups.append(make_group("Heterophily Results", "SQUIRREL", "GCN", "Poisoning", sq19["Poison"]))
    groups.append(make_group("Heterophily Results", "CHAMELEON", "GCN", "Evasion", ch20["Evasion"]))
    groups.append(make_group("Heterophily Results", "CHAMELEON", "GCN", "Poisoning", ch20["Poison"]))

    rung = parse_table25_rung(supp)
    for ds in ("SQUIRREL", "CHAMELEON"):
        groups.append(make_group("Heterophily Results", ds, "RUNG", "Evasion", rung[ds]["Evasion"]))
        groups.append(make_group("Heterophily Results", ds, "RUNG", "Poisoning", rung[ds]["Poison"]))

    ogb = parse_table4_ogb(main_text)
    for victim in ("GCN", "GSAGE"):
        for setting in ("Evasion", "Poisoning"):
            groups.append(make_group("Large-Scale Results", "OGB-ARXIV", victim, setting, ogb[victim][setting]))

    out_js = "export const leaderboardData = [\n" + ",\n".join(js_group(g) for g in groups) + "\n];\n"
    OUT.write_text(out_js, encoding="utf-8")
    OUT_DATA.write_text(out_js, encoding="utf-8")
    print(f"Wrote {len(groups)} groups to {OUT}")


if __name__ == "__main__":
    main()
