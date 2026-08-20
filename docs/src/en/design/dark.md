# Dark Mode

Birdpaper UI implements dark mode with CSS variables. Components adapt automatically—your app does not need extra dark-mode styling. Toggle a class on the root element and the full color system transitions smoothly.

---

## How It Works

Dark mode is toggled by adding the `.dark` class to the root element. Components read colors through CSS variables, which remap between light and dark values. Component code does not change.

```css
/* Light mode */
:root {
  --bp-primary-6: #165dff;
  --bp-gray-0: #ffffff;
}

/* Dark mode: under .dark, semantic variables map to the dark palette */
.dark {
  --bp-primary-6: var(--bp-primary-dark-6); /* #3c7eff */
  --bp-gray-0: var(--bp-gray-dark-0); /* #141414 */
}
```

> **Note**: Variables under `.dark` override `:root` defaults. When a component uses `var(--bp-primary-6)`, the resolved value depends on the active mode.

---

## Scale Direction

In dark mode the scale direction is inverted: 1 is darkest and 10 is lightest. The same variable name therefore resolves to different hex values in each mode.

<script setup>
const stepDirectionData = [
  { step: '1', light: 'Lightest background', dark: 'Darkest background' },
  { step: '6', light: 'Primary', dark: 'Primary (brighter)' },
  { step: '10', light: 'Darkest text', dark: 'Lightest text' },
]

const brandColorData = [
  { step: '1', lightHex: '#e8f3ff', lightDesc: 'Very light blue', darkHex: '#000d4d', darkDesc: 'Very deep blue' },
  { step: '6', lightHex: '#165dff', lightDesc: 'Primary blue', darkHex: '#3c7eff', darkDesc: 'Bright blue' },
  { step: '10', lightHex: '#000d4d', lightDesc: 'Very deep blue', darkHex: '#eaf4ff', darkDesc: 'Very light blue' },
]

const neutralColorData = [
  { step: '0', lightUsage: 'White background', lightHex: '#ffffff', darkUsage: 'Dark background', darkHex: '#141414' },
  { step: '1', lightUsage: 'Secondary background', lightHex: '#fafafa', darkUsage: 'Secondary background', darkHex: '#1f1f1f' },
  { step: '2', lightUsage: 'Border', lightHex: '#f0f0f0', darkUsage: 'Border', darkHex: '#262626' },
  { step: '8', lightUsage: 'Body text', lightHex: '#262626', darkUsage: 'Body text', darkHex: '#f0f0f0' },
  { step: '10', lightUsage: 'Darkest text', lightHex: '#141414', darkUsage: 'Lightest text', darkHex: '#ffffff' },
]

const adaptRuleData = [
  { element: 'Text color', rule: 'Use high steps (8–10)', reason: 'Maintain contrast on dark backgrounds' },
  { element: 'Background', rule: 'Use low steps (0–2)', reason: 'Reduce eye strain and create immersion' },
  { element: 'Border', rule: 'Use mid-low steps (2–3)', reason: 'Stay visible without looking harsh' },
  { element: 'Functional color', rule: 'Slightly raise primary (6) brightness', reason: 'Keep brand colors readable on dark surfaces' },
  { element: 'Shadow', rule: 'Lower opacity', reason: 'Avoid harsh edges on dark backgrounds' },
]
</script>

<bp-table :data="stepDirectionData" row-key="step">
  <template #columns>
    <bp-table-column title="Step" data-index="step" />
    <bp-table-column title="Light mode" data-index="light" />
    <bp-table-column title="Dark mode" data-index="dark" />
  </template>
</bp-table>

### Brand Color Example

Using Primary as an example, here are the actual values at key steps in both modes:

<bp-table :data="brandColorData" row-key="step">
  <template #columns>
    <bp-table-column title="Step" data-index="step" />
    <bp-table-column title="Light hex" data-index="lightHex" />
    <bp-table-column title="Light description" data-index="lightDesc" />
    <bp-table-column title="Dark hex" data-index="darkHex" />
    <bp-table-column title="Dark description" data-index="darkDesc" />
  </template>
</bp-table>

> **Tip**: Functional colors are roughly 20% brighter in dark mode so they stay visually strong on dark backgrounds.

---

## Neutral Mapping

Neutral (Gray) colors fully invert in dark mode: the lightest light-mode step maps to the darkest dark-mode step, and vice versa.

<bp-table :data="neutralColorData" row-key="step">
  <template #columns>
    <bp-table-column title="Step" data-index="step" />
    <bp-table-column title="Light usage" data-index="lightUsage" />
    <bp-table-column title="Light hex" data-index="lightHex" />
    <bp-table-column title="Dark usage" data-index="darkUsage" />
    <bp-table-column title="Dark hex" data-index="darkHex" />
  </template>
</bp-table>

> **Guideline**: In app code, use `var(--bp-gray-0)` through `var(--bp-gray-10)` and ignore the active mode—the values switch automatically. Never hard-code hex colors in business styles.

---

## Usage

### Toggle Dark Mode

Add or remove the `.dark` class on the root element:

```js
// Enable dark mode
document.documentElement.classList.add("dark");

// Disable dark mode (back to light)
document.documentElement.classList.remove("dark");
```

### Persist Preference

Store the user’s preference in `localStorage` and restore it on load:

```js
// Save on toggle
const toggleDark = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Restore on load
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("dark");
}
```

### Follow System Preference

You can also mirror the OS setting:

```js
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// Match system on init
if (prefersDark.matches) {
  document.documentElement.classList.add("dark");
}

// Listen for OS changes
prefersDark.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark", e.matches);
});
```

### Use in CSS

Components already adapt via CSS variables. For custom styles in your app, reference the same variables:

```css
/* Variables switch automatically with the active mode */
.my-element {
  color: var(--bp-gray-10);
  background: var(--bp-gray-0);
  border: 1px solid var(--bp-gray-2);
}

/* Use RGB variants when you need opacity */
.my-overlay {
  background: rgba(var(--bp-gray-0-rgb), 0.8);
}
```

> **Tip**: Every color variable also has an `-rgb` suffix for `rgba()` usage. See the [Color](./color) docs.

---

## Adaptation Rules

Components follow these rules in dark mode to stay readable and comfortable:

<bp-table :data="adaptRuleData" row-key="element">
  <template #columns>
    <bp-table-column title="Element" data-index="element" />
    <bp-table-column title="Rule" data-index="rule" />
    <bp-table-column title="Reason" data-index="reason" />
  </template>
</bp-table>

> **Guideline**: Custom components that follow these rules stay visually aligned with Birdpaper UI in dark mode. The core principle: always use semantic CSS variables—never hard-code color values.
