# TODO

## Certificates/Achievements section redesign
- [x] Inspect current Certificates section implementation in `src/app/App.tsx` and confirm DOM/markup causes sticky-navbar heading overlap.

- [x] Implement new responsive certificate layout: uniform card grid, consistent image area with `object-contain`, balanced card heights.

- [ ] Add clear hierarchy: title, issuer, date (from existing data) + concise descriptions.
- [ ] Add `View Certificate` action button with proper hover/focus and accessible labels.
- [ ] Keep only one subtle featured badge; ensure featured card is not disproportionately large.
- [ ] Improve spacing/typography/alignment/hover states; preserve existing dark theme.
- [ ] Adjust mobile layout for single-column cards and readable spacing.
- [ ] Verify desktop + mobile rendering and that section heading is not hidden under sticky navbar (use `scroll-mt-*` / spacing fix as needed).

