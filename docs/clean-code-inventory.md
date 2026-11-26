# Clean Code inventory

Source: Robert C. Martin, _Clean Code_. Portable principles for this Next.js portfolio resume.

**Stack:** `typescript` (Next.js App Router + React + Tailwind CSS v4). Detected from `package.json` + `tsconfig.json` (no Angular).

## Tags

| Tag                   | Meaning                                             |
| --------------------- | --------------------------------------------------- |
| `automate`            | Machine gate in lint / CI when tooling is installed |
| `guide`               | Cursor / human judgment (`.cursor/rules/`)          |
| `exception-candidate` | Documented deviation with principle + rationale     |

## Enforcement pattern

| Layer                  | Location                                                 | Role                                         |
| ---------------------- | -------------------------------------------------------- | -------------------------------------------- |
| Automated gates        | `eslint.config.mjs` (+ optional Prettier / knip / jscpd) | Chapter `automate` rows                      |
| Agent / human judgment | `.cursor/rules/`                                         | `clean-code.mdc`; `unit-tests.mdc` for specs |
| Agent entrypoint       | `AGENTS.md`                                              | Pointer to this inventory only               |
| Source of truth        | `docs/clean-code-inventory.md`                           | Principle → tag → check                      |

## Cursor rules convention

- Default: one `.cursor/rules/clean-code.mdc` for judgment (`alwaysApply: true`)
- Split only for different globs: `unit-tests.mdc` for `**/*.{spec,test}.*`
- Guide-heavy chapters stay in the rule file — no new ESLint for those alone
- Layer map, lowest to highest (a layer may import only from layers below it): `src/types/domain` (domain models) → `src/types/ui` (UI contracts) and `src/lib` (helpers) as siblings that never import each other → `src/content` (data/IA) and `src/components` (UI via props) as siblings that never import each other → `src/app` (composition root; imports content and passes slices to components as props); import-direction bans wired in ESLint across production, spec, and harness files
- Component folders: `src/components/<feature>/` for `layout`, `hero`, `contact`, `experience`, `summary`, and `project`; each folder holds its components plus their colocated specs and harnesses
- Shared components: `src/components/shared/` holds code used by more than one feature folder; feature folders must not import each other (ESLint-enforced), only `shared`

## Stack tooling

| Intent               | Tool                                                                            | Status                                                                            |
| -------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Lint entrypoint      | `npm run lint` → `eslint .` / `eslint.config.mjs` (Next 16 removed `next lint`) | Wired (Clean Code + unicorn; ESLint 10)                                           |
| Types                | `eslint-config-next/typescript` + `parserOptions.projectService`                | Wired (typed rules: only-throw-error, await-thenable, require-await)              |
| Format (Ch.5)        | Prettier + `eslint-config-prettier` + `eslint-plugin-simple-import-sort`        | Wired (`format` / `format:check`; import order blocks via `simple-import-sort/*`) |
| Smells (Ch.17)       | `eslint-plugin-unicorn` (MIT)                                                   | Wired in `eslint.config.mjs`                                                      |
| Dead code            | `knip`                                                                          | Wired (`npm run knip`; `knip.json`)                                               |
| Duplication          | `jscpd`                                                                         | Wired (`npm run jscpd`)                                                           |
| Aggregate gate       | `npm run check`                                                                 | lint + typecheck + format:check + knip + jscpd + test                             |
| Pre-commit           | Husky                                                                           | Wired (`.husky/pre-commit` → `npm run check`)                                     |
| CI                   | GitHub Actions (`.github/workflows/ci.yml`)                                     | Wired (`npm run check` + `npm run build` on push/PR)                              |
| Unit tests (Ch.9)    | Vitest + Testing Library                                                        | Wired (`npm test`; CI runs suite; dual-standard ESLint ready)                     |
| Boundaries (Ch.8/11) | `no-restricted-imports`                                                         | Wired for `@/` and relative paths between `content` / `components` / `app`        |
| Avoid                | `eslint-plugin-sonarjs` (LGPL)                                                  | Do not enable                                                                     |

## Chapter matrix

| Ch    | Topic                       | Key principles                                        | Tags                | Planned checks (this repo)                                                                                                                                 |
| ----- | --------------------------- | ----------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Clean Code                  | Craft; what clean means here                          | `guide`             | Judgment in `clean-code.mdc`                                                                                                                               |
| 2     | Meaningful Names            | Intention-revealing; searchable; one word per concept | `automate`, `guide` | `id-length`, `id-denylist`, `@typescript-eslint/naming-convention` (functions: camelCase or PascalCase for React components)                               |
| 3     | Functions                   | Small; one abstraction level; few args; CQS           | `automate`, `guide` | `complexity` 5, `max-depth` 2, `max-params` 3, `max-lines-per-function` 20 (`.ts`); softer on `.tsx` — see exceptions                                      |
| 4     | Comments                    | Why not what; no FIXME/XXX/HACK                       | `automate`, `guide` | `no-warning-comments` (terms: fixme, xxx, hack); TODO allowed                                                                                              |
| 5     | Formatting                  | Newspaper; team formatter                             | `automate`, `guide` | Prettier + `eslint-config-prettier` last; `simple-import-sort` import blocks; vertical density guide                                                       |
| 6     | Objects and Data Structures | Data vs object; LoD; DTOs                             | `automate`, `guide` | `local/no-mixed-jsx-elements` on `src/app/**` and `src/components/**` (each component renders native HTML or composes custom components); content as props |
| 7     | Error Handling              | Exceptions over codes; no empty catch                 | `automate`, `guide` | `no-empty`, `no-throw-literal`, `prefer-promise-reject-errors`, `@typescript-eslint/only-throw-error`                                                      |
| 8     | Boundaries                  | Wrap third-party; owned façade                        | `automate`, `guide` | `no-restricted-imports` on `src/content` and `src/components`                                                                                              |
| 9     | Unit Tests                  | FIRST; AAA; dual standard                             | `automate`, `guide` | `unit-tests.mdc`; Vitest via `npm test` / `npm run check`                                                                                                  |
| 10    | Classes                     | SRP; small cohesive types                             | `automate`, `guide` | `max-classes-per-file` 1, `max-lines` 100                                                                                                                  |
| 11    | Systems                     | Construction vs use; one-way deps                     | `automate`, `guide` | `app` imports `content` and passes props to `components`; ESLint bans content/components importing `app` or each other                                     |
| 12    | Emergence                   | Tests; no duplication; intent; fewest elements        | `guide`, `automate` | `knip` + `jscpd` via `npm run check`                                                                                                                       |
| 13    | Concurrency                 | Clear async boundaries                                | `automate`, `guide` | `@typescript-eslint/await-thenable`, `require-await`                                                                                                       |
| 14    | Successive Refinement       | Draft → refine → green → commit                       | `guide`             | Feature branch; no broken `main`; commit when asked                                                                                                        |
| 15–16 | Case studies                | —                                                     | out of scope        | —                                                                                                                                                          |
| 17    | Smells and Heuristics       | G5 duplication; nesting; negated conditions           | `automate`, `guide` | `no-nested-ternary`, `no-useless-return`, selected `unicorn/*` rules                                                                                       |

## Intentional exceptions

| Ch  | Exception                                                 | Principle        | Rationale                                                                                                                                             |
| --- | --------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | Softer `max-lines-per-function` / `complexity` on `*.tsx` | Small functions  | Resume section JSX often exceeds book line counts before extract; keep strict on `.ts` helpers/content; extract when a section grows past readability |
| 9   | Vitest ESLint rules limited to the recommended preset     | FIRST / automate | `@vitest/eslint-plugin` is wired with its recommended rules and dual-standard size overrides; add stricter assertion lint only if it becomes useful   |
