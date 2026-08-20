<template>
  <bp-space>
    <bp-dropdown trigger="hover" @select="handleSelect">
      <bp-button status="gray" type="secondary">Hover trigger</bp-button>

      <template #content>
        <bp-doption value="edit">Edit</bp-doption>
        <bp-doption value="copy">Copy</bp-doption>
        <bp-doption value="delete">Delete</bp-doption>
      </template>
    </bp-dropdown>

    <bp-dropdown trigger="click" position="bottom-right" style="margin-left: 16px" @select="handleSelect">
      <bp-button status="gray" type="secondary">Click trigger (right-aligned)</bp-button>

      <template #content>
        <bp-doption value="1">Option 1</bp-doption>
        <bp-doption value="2">Option 2</bp-doption>
        <bp-doption value="3" disabled>Disabled</bp-doption>
      </template>
    </bp-dropdown>
  </bp-space>
</template>

<script setup lang="ts">
const handleSelect = (value: string) => {
  console.log(value);
};
</script>
