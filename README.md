# Portfolio

Single-page interactive resume built with Next.js (static export).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit the page at [`src/app/page.tsx`](src/app/page.tsx). Resume copy and section IA live under [`src/content/`](src/content/).

Typography uses Source Serif 4 (hero) and Source Sans 3 (UI/body) via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).

## Scripts

| Script          | Purpose                              |
| --------------- | ------------------------------------ |
| `npm run dev`   | Local development                    |
| `npm run build` | Static export to `out/`              |
| `npm start`     | Serve the static `out/` build        |
| `npm run check` | Lint, format, knip, jscpd, and tests |
| `npm test`      | Vitest once                          |

## Quality gates

- **Pre-commit:** Husky runs `npm run check`
- **CI:** GitHub Actions runs `npm run check` and `npm run build` on pushes and pull requests

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- Clean Code inventory: [`docs/clean-code-inventory.md`](docs/clean-code-inventory.md)
