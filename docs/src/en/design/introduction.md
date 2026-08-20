# Introduction

Birdpaper UI is an enterprise-grade Vue 3 component library for admin and middle-office applications. It ships high-quality UI components and a complete design system so you can build consistent, polished web apps quickly.

## Design Philosophy

Birdpaper UI follows a design philosophy of **simplicity, consistency, and efficiency**:

- **Simplicity**: Strip away unnecessary decoration so the interface focuses on content
- **Consistency**: A shared visual language and interaction patterns reduce cognitive load
- **Efficiency**: Clear information hierarchy and responsive feedback help users finish tasks faster

## Design System

The Birdpaper UI design system covers these core areas:

<script setup>
const systemData = [
  { area: 'Color', desc: 'Functional and neutral palettes, with light and dark modes' },
  { area: 'Typography', desc: 'Shared font family, size, and weight rules' },
  { area: 'Size', desc: 'Four size levels: mini / small / default / large' },
  { area: 'Radius', desc: 'Corner radius tokens that scale with component size' },
  { area: 'Shadow', desc: 'Layered elevation shadows' },
  { area: 'Motion', desc: 'Shared transition durations and easing curves' },
  { area: 'Layering', desc: 'Standardized z-index management' },
]
</script>

<bp-table :data="systemData" row-key="area">
  <template #columns>
    <bp-table-column title="Area" data-index="area" />
    <bp-table-column title="Description" data-index="desc" />
  </template>
</bp-table>

## Technical Features

- **Vue 3**: Built on the Composition API, with full support for `<script setup>`
- **TypeScript**: Complete type definitions for a better developer experience
- **CSS Variables**: Theme customization and dark mode via CSS custom properties
- **Tree-shakable**: Import only what you need to keep bundles small
- **pnpm Monorepo**: Components, themes, and docs managed as separate packages
