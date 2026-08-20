# Quick Start

This section covers the basics of using Birdpaper UI.

## Prerequisites

Make sure you have finished [Installation](/develop/install/).

## Using Components

### In Templates

All components are registered with the `bp-` prefix and can be used directly in templates:

```vue
<template>
  <bp-space>
    <bp-button type="primary">Primary</bp-button>
    <bp-button type="secondary">Secondary</bp-button>
  </bp-space>
</template>
```

### Form Example

```vue
<template>
  <bp-form :model="form" :rules="rules" label-width="80px">
    <bp-form-item label="Username" field="name" required>
      <bp-input v-model="form.name" placeholder="Enter username" />
    </bp-form-item>
    <bp-form-item label="Email" field="email">
      <bp-input v-model="form.email" placeholder="Enter email" />
    </bp-form-item>
    <bp-form-item>
      <bp-button type="primary" @click="handleSubmit">Submit</bp-button>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({ name: "", email: "" });
const rules = {
  name: [{ required: true, message: "Please enter a username" }],
};
</script>
```

### Data Display Example

```vue
<template>
  <bp-table :data="tableData" row-key="id">
    <bp-table-column title="Name" data-index="name" />
    <bp-table-column title="Age" data-index="age" />
    <bp-table-column title="Address" data-index="address" />
  </bp-table>
</template>

<script setup lang="ts">
const tableData = [
  { id: 1, name: "Alice", age: 28, address: "Beijing" },
  { id: 2, name: "Bob", age: 32, address: "Shanghai" },
];
</script>
```

### Feedback Example

```vue
<script setup lang="ts">
import { Message, Modal } from "birdpaper-ui";

const showMessage = () => {
  Message({ type: "success", content: "Done!" });
};

const showModal = () => {
  Modal.info({ title: "Notice", content: "This is a message." });
};
</script>
```

## Custom Theme

Birdpaper UI builds its theme on CSS variables. Override them to customize:

```css
:root {
  --bp-primary-6: #1677ff; /* Primary brand color */
  --bp-gray-9: #1a1a1a;    /* Primary text color */
}
```

See [Theming](/develop/theme/).

## Internationalization

Set the locale through global config:

```ts
import BirdpaperUI from "birdpaper-ui";

app.use(BirdpaperUI, { locale: "en" });
```

See [Global Config](/components/config/).

## Next Steps

- [Component Catalog](/components/catalog/) — Browse all available components
- [Global Config](/components/config/) — Customize prefix, size, z-index, and more
- [Theming](/develop/theme/) — Customize colors, sizes, and dark mode with CSS variables
- [Changelog](/develop/changelog/) — Version history
