# Contributing

Thanks for your interest in Birdpaper UI. Issues, discussions, and Pull Requests are all welcome. Before submitting, read [Local Development](/develop/local-dev/) and make sure docs and tests run locally.

## Ways to Contribute

- **Report bugs**: Include reproduction steps, expected vs actual behavior, versions, browser, and a minimal repro (docs demos or CodeSandbox work well)
- **Propose features**: Describe the use case and motivation; an API or interaction sketch helps
- **Improve docs**: Typos, examples, translations, and outdated notes are all useful
- **Contribute code**: Bug fixes, tests, new components, or enhancements

Repository: [birdpaper-team/birdpaper-ui](https://github.com/birdpaper-team/birdpaper-ui).

## Before You Start

1. Search existing Issues / PRs to avoid duplicate work
2. For large changes (new components, breaking changes), open an Issue first
3. Fork the repo and create a feature branch from the latest default branch:

```bash
git pull
git checkout -b feat/your-topic
```

## Pre-PR Checklist

Before opening a PR, please check:

<script setup>
import { ref } from 'vue'

const checklist = ref([])

const commitTypeData = [
  { type: 'feat', desc: 'New feature' },
  { type: 'fix', desc: 'Bug fix' },
  { type: 'docs', desc: 'Documentation only' },
  { type: 'style', desc: 'Formatting / style tweaks with no logic change' },
  { type: 'refactor', desc: 'Refactor (neither feat nor fix)' },
  { type: 'perf', desc: 'Performance' },
  { type: 'test', desc: 'Tests' },
  { type: 'build', desc: 'Build or dependencies' },
  { type: 'ci', desc: 'CI configuration' },
  { type: 'chore', desc: 'Chores' },
  { type: 'revert', desc: 'Revert' },
]
</script>

<bp-checkbox-group v-model="checklist" direction="vertical">
  <bp-checkbox value="docs">Related docs / demos look correct under <code>pnpm docs:dev</code></bp-checkbox>
  <bp-checkbox value="test">Affected components have new or updated unit tests, and <code>pnpm test</code> passes</bp-checkbox>
  <bp-checkbox value="lint"><code>pnpm lint</code> reports no new errors</bp-checkbox>
  <bp-checkbox value="api">Public API changes are reflected in the matching <code>docs/src/components/**/api.md</code> and examples</bp-checkbox>
  <bp-checkbox value="theme">
    Visual token / dark-mode changes stay consistent with
    <a href="/develop/theme/">Theming</a>
    and
    <a href="/design/dark/">Dark Mode</a>
  </bp-checkbox>
</bp-checkbox-group>

## Commit Messages

This repo follows [Conventional Commits](https://www.conventionalcommits.org/). Interactive generation is recommended:

```bash
pnpm cz
```

Common types:

<bp-table :data="commitTypeData" row-key="type">
  <template #columns>
    <bp-table-column title="type" data-index="type" />
    <bp-table-column title="Description" data-index="desc" />
  </template>
</bp-table>

Scope is optional (`docs`, `packages`, `root`, or a custom value). Examples:

```text
feat(packages): add InputNumber step strict mode
fix(packages): correct Select dropdown z-index
docs: complete local development guide
```

For breaking changes, include `BREAKING CHANGE:` in the body, or discuss migration early.

## Pull Requests

1. Push your branch to your fork
2. Open a Pull Request against the repository **default branch**
3. Prefer a description that includes:
   - **Summary**: What problem this solves
   - **Related Issue**: e.g. `Fixes #123`
   - **How to verify**: Test commands, docs paths, screenshots or recordings for UI changes
   - **Breaking changes**: Scope and migration notes, if any

Keep PRs focused; split large work into smaller reviews when possible.

## Code Review

- Stay kind and specific; critique the change, not the person
- Review for correctness, API consistency, accessibility, and whether docs/tests keep up
- After addressing feedback, reply in the thread so reviewers can continue

Maintainers handle releases after merge; changes land in the [Changelog](/develop/changelog/).

## Code of Conduct

By participating, you agree to:

- Respect different viewpoints and experience levels
- Accept constructive feedback
- Communicate with the goal of solving problems and improving the project

Harassment, personal attacks, or inappropriate content are not acceptable. Maintainers may close Issues / PRs or limit participation in serious cases.

## License

Contributions are licensed under the repository [MIT License](https://github.com/birdpaper-team/birdpaper-ui/blob/HEAD/LICENSE) by default. Do not contribute if you cannot accept that.

## Need Help?

- Start with [Local Development](/develop/local-dev/)
- Ask on GitHub Issues with environment details and a minimal reproduction
- Docs and components: [Component Catalog](/components/catalog/)
