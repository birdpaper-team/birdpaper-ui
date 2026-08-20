<template>
  <bp-dropdown @select="handleSelect">
    <bp-button status="gray" type="secondary">Bottom</bp-button>

    <template #content>
      <bp-doption value="1">Option 1</bp-doption>
      <bp-doption value="2">Option 2</bp-doption>
      <bp-doption value="3">Option 3</bp-doption>
      <bp-doption value="4">Option 4</bp-doption>
      <bp-doption value="5">Option 5</bp-doption>
    </template>
  </bp-dropdown>
</template>

<script setup lang="ts">
const handleSelect = (value: string) => {
  console.log(value);
};
</script>
