# Cedid website

Static company website built with Astro and Tailwind CSS. There is no application backend.

## Development

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm check
pnpm build
pnpm preview
```

## Project structure

- `src/pages/` — Astro routes
- `src/layouts/` — shared page layouts and document metadata
- `src/components/` — reusable interface components
- `src/data/products.ts` — static product catalog model and data
- `src/styles/` — global Tailwind entry point and shared styles
- `public/images/products/` — product images served as static files

Contact form delivery and deployment are intentionally left for a later setup phase.
