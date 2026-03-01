#!/usr/bin/env bash
set -euo pipefail

# ── Prompt for version label ──────────────────────────────────────────────────
read -rp "Version label (e.g. v1.2, sprint-4): " VERSION
if [[ -z "$VERSION" ]]; then
  echo "Error: version label cannot be empty." >&2
  exit 1
fi

# ── Commit ────────────────────────────────────────────────────────────────────
echo ""
echo "→ Committing …"
git add app/page.tsx app/globals.css app/layout.tsx package.json package-lock.json design.pen ship-design.sh

git commit -m "design($VERSION): regenerate landing page from design.pen

- Source: design.pen
- Version: $VERSION"

echo "✓ Committed."

# ── Push ──────────────────────────────────────────────────────────────────────
echo ""
echo "→ Pushing to origin/$(git rev-parse --abbrev-ref HEAD) …"
git push

echo ""
echo "Done! $VERSION shipped."
