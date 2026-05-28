/** Shared OGB-style compact leaderboard table (used by all leaderboard pages). */

export const LEADERBOARD_COLUMNS = [
  { key: "rank", label: "Rank", align: "center", numeric: false },
  { key: "method", label: "Method", align: "left", numeric: false },
  { key: "budget1", label: "Budget 1", align: "center", numeric: true },
  { key: "budget2", label: "Budget 2", align: "center", numeric: true },
  { key: "budget3", label: "Budget 3", align: "center", numeric: true },
  { key: "budget4", label: "Budget 4", align: "center", numeric: true },
  { key: "budget5", label: "Budget 5", align: "center", numeric: true },
  { key: "attackTime", label: "Attack Time", align: "center", numeric: false }
];

const BUDGET_SETTING_RE = /\(Budget\s*(\d)\)/i;

function formatCell(value, numeric) {
  if (value === null || value === undefined || value === "") return "—";
  if (numeric && typeof value === "number") return Number.isInteger(value) ? String(value) : value.toFixed(1);
  return String(value);
}

function sortMetric(entry) {
  for (const key of ["budget5", "budget4", "budget3", "budget2", "budget1"]) {
    const v = entry[key];
    if (typeof v === "number" && !Number.isNaN(v)) return v;
  }
  return -Infinity;
}

export function normalizeEntry(entry) {
  return {
    method: entry.method,
    budget1: entry.budget1 ?? null,
    budget2: entry.budget2 ?? null,
    budget3: entry.budget3 ?? null,
    budget4: entry.budget4 ?? null,
    budget5: entry.budget5 ?? null,
    attackTime: entry.attackTime ?? "—"
  };
}

/** Merge legacy “(Budget N)” groups if present in raw data. */
export function prepareLeaderboardGroups(rawGroups) {
  const budgetGroups = [];
  const standardGroups = [];

  for (const group of rawGroups) {
    const match = group.setting && group.setting.match(BUDGET_SETTING_RE);
    if (match) {
      budgetGroups.push({ group, budgetIndex: Number(match[1]) });
    } else {
      standardGroups.push({
        ...group,
        entries: group.entries.map(normalizeEntry)
      });
    }
  }

  if (!budgetGroups.length) return standardGroups;

  const merged = new Map();

  for (const { group, budgetIndex } of budgetGroups) {
    const baseSetting = group.setting.replace(BUDGET_SETTING_RE, "").trim();
    const key = `${group.section}|${group.dataset}|${group.victim}|${baseSetting}`;

    if (!merged.has(key)) {
      merged.set(key, {
        section: group.section,
        dataset: group.dataset,
        victim: group.victim,
        setting: baseSetting,
        entriesByMethod: new Map()
      });
    }

    const bucket = merged.get(key);
    for (const entry of group.entries) {
      if (!bucket.entriesByMethod.has(entry.method)) {
        bucket.entriesByMethod.set(entry.method, normalizeEntry(entry));
      }
      const row = bucket.entriesByMethod.get(entry.method);
      const val = entry[`budget${budgetIndex}`] ?? entry.score;
      if (typeof val === "number") row[`budget${budgetIndex}`] = val;
    }
  }

  const pivoted = [...merged.values()].map((bucket) => ({
    section: bucket.section,
    dataset: bucket.dataset,
    victim: bucket.victim,
    setting: bucket.setting,
    entries: [...bucket.entriesByMethod.values()]
  }));

  return [...standardGroups, ...pivoted];
}

export function sortAndRankEntries(entries) {
  return [...entries]
    .map(normalizeEntry)
    .sort((a, b) => sortMetric(b) - sortMetric(a))
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
}

export function renderLeaderboardTable(entries, { caption = "" } = {}) {
  const ranked = sortAndRankEntries(entries);
  const bestMethod = ranked.length ? ranked[0].method : "";

  const head = LEADERBOARD_COLUMNS.map(
    (col) => `<th class="agb-lb-col-${col.key}" scope="col">${col.label}</th>`
  ).join("");

  const body = ranked
    .map((entry) => {
      const cells = LEADERBOARD_COLUMNS.map((col) => {
        const align = col.align === "left" ? "agb-lb-align-left" : "agb-lb-align-center";
        const value = col.key === "rank" ? entry.rank : entry[col.key];
        return `<td class="agb-lb-col-${col.key} ${align}">${formatCell(value, col.numeric)}</td>`;
      }).join("");
      const bestClass = entry.method === bestMethod ? "is-best" : "";
      return `<tr class="${bestClass}">${cells}</tr>`;
    })
    .join("");

  const captionHtml = caption ? `<caption class="agb-lb-caption">${caption}</caption>` : "";

  return `
    <div class="agb-leaderboard-table-wrap" role="region" aria-label="${caption || "Leaderboard results"}">
      <table class="agb-leaderboard-table agb-leaderboard-table--compact">
        ${captionHtml}
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `.replace(/<\/?div/g, (t) => t.replace("div", "div"));
}
