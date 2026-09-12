# Theme provenance

This website uses the official **Hugo Blox Academic CV** starter and its Blox module.

- Starter: https://github.com/HugoBlox/theme-academic-cv
- Starter commit inspected: `a4aa8664472c49617a37c4b49e2752672487e959`
- Theme module versions: `go.mod` and `go.sum`
- Frontend dependency versions: `pnpm-lock.yaml`
- Hugo Extended: `0.162.0`
- Upstream license: `LICENSE.md`

The stock Academic typography, responsive navigation, Markdown blocks and page
templates are used with a light-only, white-background configuration. All public
biographical, research, publication and project content is in `content/**/*.md`.
No demo identities, stock portraits or fabricated CV credentials are included.

Local template overrides provide semantic Markdown block headings, a two-column
desktop layout, plain article pages, and a compact attribution footer.
`scripts/prepare-tailwind.cjs` normalizes the Tailwind executable shim for Hugo
0.162 compatibility with pnpm on Windows and Linux.
