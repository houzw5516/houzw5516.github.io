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

## Academic visual refresh

The homepage uses `layouts/_partials/academic/home.html` and the existing
Academic CV base layout. White surfaces, navy type, muted teal accents, responsive
research cards, a publication band, and a local SVG circuit illustration form
the shared visual system in `assets/css/custom.css`.

Both Chinese and English pages retain their language-switch destinations.
Navigation uses native HTML `details` on smaller screens and works without
JavaScript. Focus outlines, a skip link, and reduced-motion support are included.

Homepage profile labels, links, illustration captions, and research keywords
are in `content/_index.md` and `content/_index.en.md`. Research/project cards read
titles and summaries from their detail Markdown pages. Project `technologies`
and publication `citation_authors`/`journal` are also Markdown front matter.
The first homepage section supplies the biography; later section titles supply
the homepage headings. Their legacy text remains available as source material.

The pre-refresh source archive is `.local-backup/before-design-20261029.zip`.
