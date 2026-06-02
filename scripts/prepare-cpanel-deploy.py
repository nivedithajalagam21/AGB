#!/usr/bin/env python3
"""
Build flat static deploy/ for cPanel: copy Jekyll _site output, rewrite absolute URLs.
Run from repo root after `jekyll build`.
"""
from __future__ import annotations

import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"
DEPLOY = ROOT / "deploy"

# Flat HTML at deploy root: slug -> source under _site/
PAGE_DIRS = {
    "leaderboard": "leaderboard",
    "models": "models",
    "datasets": "datasets",
    "about": "about",
}


def rewrite_text(text: str, *, is_under_assets_js: bool) -> str:
    """Rewrite absolute site paths to relative (flat HTML + assets/)."""

    def rep(pat: str, to: str, s: str) -> str:
        return re.sub(pat, to, s)

    s = text

    # Page URLs (/slug/ or /slug)
    page_pairs = [
        (r'href="/methodology/?"', 'href="index.html"'),
        (r'href="/models/?"', 'href="models.html"'),
        (r'href="/datasets/?"', 'href="datasets.html"'),
        (r'href="/leaderboard/?"', 'href="leaderboard.html"'),
        (r'href="/about/?"', 'href="about.html"'),
    ]
    for p, t in page_pairs:
        s = rep(p, t, s)

    # JS object literals and templates (page-home.js)
    js_page = [
        ('href: "/methodology/"', 'href: "index.html"'),
        ('href: "/models/"', 'href: "models.html"'),
        ('href: "/datasets/"', 'href: "datasets.html"'),
        ('href: "/leaderboard/"', 'href: "leaderboard.html"'),
        ('href: "/about/"', 'href: "about.html"'),
    ]
    for p, t in js_page:
        s = s.replace(p, t)

    # Home
    s = rep(r'href="/"', 'href="index.html"', s)

    # Static paths
    s = rep(r'href="/assets/', 'href="assets/', s)
    s = rep(r'src="/assets/', 'src="assets/', s)
    s = rep(r'href="/favicon', 'href="favicon', s)

    # RSS may point to absolute site URL
    s = rep(r'href="https://example\.com/feed\.xml"', 'href="feed.xml"', s)

    # Strip accidental trailing space before closing quote (Jekyll topnav)
    s = rep(r'src="assets/js/bootstrap\.min\.js "', 'src="assets/js/bootstrap.min.js"', s)

    if is_under_assets_js:
        s = s.replace('from "/data/', 'from "../data/')
        s = s.replace('from "/assets/js/components.js"', 'from "./components.js"')
        s = s.replace('from "/assets/js/leaderboard-table.js"', 'from "./leaderboard-table.js"')

    return s


def rewrite_file(path: Path) -> None:
    rel = path.relative_to(DEPLOY)
    is_js = rel.parts[0:2] == ("assets", "js")
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return
    new = rewrite_text(text, is_under_assets_js=is_js)
    if new != text:
        path.write_text(new, encoding="utf-8")


def main() -> int:
    if not SITE.is_dir():
        print("Run `jekyll build` first; missing _site/", file=sys.stderr)
        return 1

    if DEPLOY.exists():
        shutil.rmtree(DEPLOY)
    DEPLOY.mkdir(parents=True)

    shutil.copy2(SITE / "index.html", DEPLOY / "index.html")
    for html_name, src_dir in PAGE_DIRS.items():
        src = SITE / src_dir / "index.html"
        if not src.is_file():
            print(f"Missing {src}", file=sys.stderr)
            return 1
        shutil.copy2(src, DEPLOY / f"{html_name}.html")

    # Static dirs / files
    shutil.copytree(SITE / "assets", DEPLOY / "assets")
    for extra in ("favicon.svg", "feed.xml", "robots.txt"):
        p = SITE / extra
        if p.is_file():
            shutil.copy2(p, DEPLOY / extra)

    # Strip UTF-8 BOM if any
    for path in DEPLOY.rglob("*"):
        if path.is_file() and path.suffix.lower() in (
            ".html",
            ".js",
            ".css",
            ".xml",
            ".txt",
            ".json",
        ):
            rewrite_file(path)

    htaccess = """RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
"""
    (DEPLOY / ".htaccess").write_text(htaccess, encoding="utf-8")

    zip_path = ROOT / "agb.zip"
    if zip_path.is_file():
        zip_path.unlink()
    # Archive contents of deploy/ at zip root (ready to extract into public_html)
    shutil.make_archive(str(ROOT / "agb"), "zip", root_dir=DEPLOY)

    print(f"Wrote {DEPLOY} and {zip_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
