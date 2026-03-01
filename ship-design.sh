#!/usr/bin/env bash
set -euo pipefail

# ── Prompt for version label ──────────────────────────────────────────────────
read -rp "Version label (e.g. v1.2, sprint-4): " VERSION
if [[ -z "$VERSION" ]]; then
  echo "Error: version label cannot be empty." >&2
  exit 1
fi

echo ""
echo "→ Regenerating app/page.tsx from design.pen …"

# ── Regenerate page.tsx via Claude Code ───────────────────────────────────────
# --allowedTools restricts Claude to Pencil read tools only — it cannot use
# the Write tool, so it is forced to output the code as plain text to stdout.
CLAUDE_RAW=$(claude --print \
  --allowedTools "mcp__pencil__get_editor_state,mcp__pencil__batch_get,mcp__pencil__get_screenshot,mcp__pencil__snapshot_layout,mcp__pencil__get_guidelines,mcp__pencil__get_variables" \
  "Read design.pen and output ONLY the complete raw TypeScript code for app/page.tsx as a Next.js landing page. Use Tailwind CSS. Match the layout, naming and structure from the canvas exactly. Do NOT write any files. Output ONLY the raw code — no explanation, no markdown code fences.")

# Strip markdown code fences if present (macOS-compatible awk)
CLAUDE_STRIPPED=$(printf '%s\n' "$CLAUDE_RAW" \
  | awk '/^```/{if(in_block){in_block=0;next}else{in_block=1;next}} in_block{print}')

# If stripping produced nothing (no fences used), fall back to raw output
if [[ -z "$CLAUDE_STRIPPED" ]]; then
  CLAUDE_STRIPPED="$CLAUDE_RAW"
fi

printf '%s\n' "$CLAUDE_STRIPPED" > app/page.tsx.tmp

# Validate the output looks like a TSX file
if [[ ! -s app/page.tsx.tmp ]]; then
  echo "Error: Claude returned an empty file. Aborting." >&2
  rm -f app/page.tsx.tmp
  exit 1
fi

if ! grep -q "export default" app/page.tsx.tmp; then
  echo "Error: output does not look like a valid page component. Aborting." >&2
  cat app/page.tsx.tmp >&2
  rm -f app/page.tsx.tmp
  exit 1
fi

mv app/page.tsx.tmp app/page.tsx
echo "✓ app/page.tsx updated."

# ── Commit ────────────────────────────────────────────────────────────────────
echo ""
echo "→ Committing …"
git add app/page.tsx app/globals.css app/layout.tsx

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
