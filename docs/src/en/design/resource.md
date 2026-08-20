# Design Resources

Birdpaper UI provides a full set of design resources so designers and developers can collaborate efficiently and keep design and implementation aligned.

---

## Icon Library

Birdpaper UI’s official icon set is [Birdpaper Icon](https://github.com/nicepkg/birdpaper-icon), built on [Remix Icon](https://remixicon.com/). It offers 2,000+ Vue icon components in line and fill styles.

### Install

```bash
pnpm add birdpaper-icon
```

### Basic Usage

Icons support `size`, `fill`, `rotate`, and related props. Import only what you need:

```vue
<script setup>
import { IconSearchLine, IconHeartFill } from "birdpaper-icon";
</script>

<template>
  <!-- Line icon -->
  <IconSearchLine size="16px" />

  <!-- Fill icon with custom color -->
  <IconHeartFill size="16px" fill="#f53f3f" />

  <!-- Rotation -->
  <IconSearchLine size="16px" :rotate="90" />
</template>
```

### Icon Props

<script setup>
const iconPropsData = [
  { prop: 'size', type: 'String', default: '18px', desc: 'Icon size, including unit' },
  { prop: 'fill', type: 'String', default: '#595959', desc: 'Icon color' },
  { prop: 'spin', type: 'Boolean', default: 'false', desc: 'Enable spin animation' },
  { prop: 'rotate', type: 'Number', default: '-', desc: 'Rotation angle in degrees' },
]

const tokenData = [
  { category: 'Color', prefix: '--bp-primary- / --bp-gray-', example: '--bp-primary-6: #165dff', link: 'Color' },
  { category: 'Size', prefix: '--bp-size-', example: '--bp-size-height-default: 32px', link: 'Style Guide' },
  { category: 'Layering', prefix: '--z-index-', example: '--z-index-base: 2000', link: 'Style Guide' },
  { category: 'Spacing', prefix: 'No dedicated prefix', example: 'Follows the 4px grid', link: 'Style Guide' },
]

const componentData = [
  { category: 'General', components: 'Button, Icon, Link' },
  { category: 'Layout', components: 'Grid, Space' },
  { category: 'Navigation', components: 'Steps, Pagination' },
  { category: 'Input', components: 'Input, InputNumber, Select, Checkbox, Radio, Switch, DatePicker, TimePicker, ColorPicker, InputTag, VerifyCode' },
  { category: 'Data Display', components: 'Table, Tag, Badge, Avatar, Image, Statistic, Empty, Rate' },
  { category: 'Feedback', components: 'Modal, Drawer, Message, Popconfirm, Tooltip, Spin' },
  { category: 'Other', components: 'Form, ConfigProvider' },
]
</script>

<bp-table :data="iconPropsData" row-key="prop">
  <template #columns>
    <bp-table-column title="Prop" data-index="prop" />
    <bp-table-column title="Type" data-index="type" />
    <bp-table-column title="Default" data-index="default" />
    <bp-table-column title="Description" data-index="desc" />
  </template>
</bp-table>

> **Guideline**: Icons are named `Icon{Name}{Style}`, where style is `Line` or `Fill`. Prefer line icons by default; use fill icons for emphasis or selected states.

---

## Design Tokens

All design tokens are CSS variables you can reference in design tools or code. Naming follows `--bp-{category}-{token}`.

<bp-table :data="tokenData" row-key="category">
  <template #columns>
    <bp-table-column title="Category" data-index="category" />
    <bp-table-column title="Prefix" data-index="prefix" />
    <bp-table-column title="Example" data-index="example" />
    <bp-table-column title="See also" data-index="link" />
  </template>
</bp-table>

> **Tip**: Color tokens also expose `-rgb` variants (for example `--bp-primary-6-rgb`) for `rgba()` opacity. Dark mode switches variables automatically. See [Color](./color) and [Style Guide](./guide).

---

## Component Index

Components grouped by role. Open the matching docs for details:

<bp-table :data="componentData" row-key="category">
  <template #columns>
    <bp-table-column title="Category" data-index="category" />
    <bp-table-column title="Components" data-index="components" />
  </template>
</bp-table>

---

## Theme Customization

### Override CSS Variables

Override CSS variables for global theming, including runtime switches:

```css
:root {
  --bp-primary-6: #722ed1; /* Swap brand color to purple */
  --bp-primary-5: #9254de;
  --bp-primary-4: #b37feb;
}
```

> **Guideline**: When changing the brand color, update the commonly used steps 4–7 together so the ramp stays coherent. Changing only the primary step (6) can make hover and active states feel off.

### SCSS Variable Customization

Use SCSS variables at build time for lower-level options such as class prefixes and spacing baselines:

```scss
$namespace: "bp"; // Class name prefix
$borderSize: 1px; // Border width
$defaultMargin: 10px; // Default margin
```

### Dark Mode Theming

Theme overrides also apply in dark mode. To customize dark mode separately, scope under `.dark`:

```css
:root {
  --bp-primary-6: #722ed1;
}

.dark {
  --bp-primary-dark-6: #b37feb; /* Purple primary for dark mode */
}
```

> **Tip**: Dark-mode variables use a `-dark-` infix, and the scale is inverted (1 darkest, 10 lightest). See [Dark Mode](./dark).

---

## Links

- [GitHub repository](https://github.com/birdpaper-team/birdpaper-ui) — Source code and issue tracking
- [Icon library](https://icon.birdpaper.design) — 2,000+ icon components
- [Changelog](/develop/changelog) — Version history
