<template>
  <div :class="['icon-item', { 'icon-item-active': model }]" @click="handleShowCode">
    <IconCodeLine size="13" />
  </div>
  <div class="icon-item">
    <IconFlashlightLine size="13" />
  </div>
  <div class="icon-item">
    <IconEditLine size="13" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({
  required: true,
});

const handleShowCode = () => {
  model.value = !model.value;
};
</script>
