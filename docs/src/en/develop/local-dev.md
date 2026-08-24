# Local Development

This guide walks through running the Birdpaper UI repo locally: docs site, component work, tests, and linking into an app.

## Requirements

- **Node.js** ≥ 18 (CI uses Node 20)
- **pnpm** 8 (repo `packageManager` is `pnpm@8.10.4`)

Enable the pinned pnpm with Corepack:

```bash
corepack enable
corepack prepare pnpm@8.10.4 --activate
```

## Clone and Install

```bash
git clone https://github.com/birdpaper-team/birdpaper-ui.git
cd birdpaper-ui
pnpm install
```

This is a pnpm monorepo. Main packages:

<script setup>
const packageData = [
  { path: 'packages/components', desc: 'Component source and unit tests' },
  { path: 'packages/theme', desc: 'Theme SCSS / CSS variables' },
  { path: 'packages/hooks', desc: 'Shared hooks' },
  { path: 'packages/birdpaper-ui', desc: 'Public entry and installer' },
  { path: 'docs', desc: 'VitePress documentation site' },
]

const commandData = [
  { command: 'pnpm docs:dev', desc: 'Start the docs dev server' },
  { command: 'pnpm test', desc: 'Run Vitest' },
  { command: 'pnpm vitest:ui', desc: 'Vitest UI' },
  { command: 'pnpm lint', desc: 'Run oxlint' },
  { command: 'pnpm build', desc: 'Clean and build artifacts into dist/' },
  { command: 'pnpm yalc', desc: 'Build and push via yalc for local linking' },
  { command: 'pnpm cz', desc: 'Interactive conventional commits (czg emoji)' },
  { command: 'pnpm clean', desc: 'Clear build cache / dist' },
]
</script>

<bp-table :data="packageData" row-key="path">
  <template #columns>
    <bp-table-column title="Path" data-index="path" />
    <bp-table-column title="Description" data-index="desc" />
  </template>
</bp-table>

## Start the Docs Site

Day-to-day development uses the docs site as the preview (components are linked from the workspace source):

```bash
pnpm docs:dev
```

Default URL: `http://localhost:7070/`.

Changes under `packages/components` or `packages/theme` usually hot-reload. If styles do not refresh, restart `docs:dev`.

Other docs commands:

```bash
pnpm docs:build        # Build (base: /birdpaper-ui/)
pnpm docs:build:root   # Build (base: /)
pnpm docs:preview      # Preview the build (default port 8080)
```

## Layout and Conventions

Using Button as an example, a component folder looks like:

```text
packages/components/button/
├── index.ts                 # Exports
├── src/
│   ├── button.vue           # Implementation
│   ├── props.ts
│   └── types.ts
├── style/index.ts           # Theme style entry
└── __tests__/button.test.ts
```

Matching theme styles:

```text
packages/theme/src/button.scss
```

Docs and demos:

```text
docs/src/components/button/
├── index.md                 # Component page
├── demo.md                  # Demo notes
└── api.md                   # API
docs/src/example/button/
├── basic.vue
└── ...
```

When adding a component, you typically also:

1. Implement and export under `packages/components/<name>/`
2. Add the export in `packages/components/index.ts`
3. Register in `packages/birdpaper-ui/components.ts` (and plugin classes if needed)
4. Add styles under `packages/theme/src/` and include them in `packages/theme/src/index.scss`
5. Add docs and examples under `docs/src/components/` and `docs/src/example/`
6. Register the page in `docs/src/.vitepress/config/locales/zh-CN/sidebar.ts` and `docs/src/.vitepress/config/locales/en/sidebar.ts`

## Common Commands

<bp-table :data="commandData" row-key="command">
  <template #columns>
    <bp-table-column title="Command" data-index="command" />
    <bp-table-column title="Purpose" data-index="desc" />
  </template>
</bp-table>

Run tests for a single component:

```bash
pnpm test packages/components/button
# or
pnpm exec vitest run packages/components/button
```

## Link into a Consumer App

To verify unpublished changes in a real app, use yalc:

```bash
# In the birdpaper-ui repo
pnpm yalc

# In the consumer app
yalc add birdpaper-ui
# Restart the app's dev server if needed
```

After more component changes, run `pnpm yalc` again to push. When finished, run `yalc remove birdpaper-ui` in the consumer app and restore the npm dependency.

`pnpm link` / workspace protocol also work—pick what your team prefers.

## Build Artifacts

```bash
pnpm build
```

Output lands in `dist/birdpaper-ui` (component package and `theme/*.css`). See the [Changelog](/develop/changelog/) for version history.

## Debugging Tips

- **Reproduce in docs demos first**: editing `docs/src/example/**` is the fastest way to check interaction and styles
- **Style issues**: confirm changes landed in `packages/theme` and are imported from `index.scss`
- **Type issues**: keep component `props` / `types` aligned with docs `api.md`
- **Dark mode**: the docs site can toggle appearance; see [Theming](/develop/theme/) and [Dark Mode](/design/dark/) for token rules

## Next Steps

- [Contributing](/develop/pr/) — Issue / PR flow and commit conventions
- [Theming](/develop/theme/) — CSS variables and theme overrides
- [Changelog](/develop/changelog/) — Version history
