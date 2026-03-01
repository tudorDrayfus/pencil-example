It seems file write permissions haven't been granted yet. Please approve the write permission for `app/page.tsx` — I need to update the file to match the design.

The changes I'll make based on the design data are:

1. **lastName, emailField, phoneField, timeField inputs** — change grey border (`#C5C5CB`) to purple (`#8B5CF6`, 1.5px) with matching glow shadow, to match the active state shown in the design
2. **Intermediate option** — fix background to `#EDE9FE`, border to purple `#8B5CF6` 1.5px, icon and text to purple/dark-purple (`#6D28D9`), font-semibold
3. **Advanced option** — fix background to `#FAF9FE` (not `#F5F5F5`)
4. **dayTue** — fix background to `#EDE9FE`, border to purple, text to `#6D28D9` semibold
5. **Thu/Fri/Sat/Sun days** — fix background to `#FAF9FE`, border to `#D4D4D8`
6. **classPriv / classCamp** — fix background to `#FAF9FE`, border to `#D4D4D8`
7. **classGroup shadow** — exact value from design (`0_4px_12px_#8B5CF630`)
8. **Submit button shadow** — exact value (`0_8px_20px_-2px_#8B5CF650`)
9. **footer link** — `font-bold` to match `fontWeight: "700"`
