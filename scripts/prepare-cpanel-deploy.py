#!/usr/bin/env python3
"""Backward-compatible entry point; builds dist/ via prepare-static-deploy.py."""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

_SCRIPT = Path(__file__).resolve().parent / "prepare-static-deploy.py"


def _load():
    spec = importlib.util.spec_from_file_location("prepare_static_deploy", _SCRIPT)
    if spec is None or spec.loader is None:
        raise ImportError(f"Cannot load {_SCRIPT}")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


if __name__ == "__main__":
    raise SystemExit(_load().main())
