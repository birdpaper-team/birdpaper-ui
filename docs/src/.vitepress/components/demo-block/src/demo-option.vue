<template>
  <div :class="['icon-item', { 'icon-item-active': model }]" @click="handleShowCode">
    <IconCodeLine size="13" />
  </div>
  <!-- <div class="icon-item">
    <IconFlashlightLine size="13" />
  </div> -->
  <div class="icon-item" @click="toEdit">
    <IconEditLine size="13" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ required: true });
const props = defineProps({
  src: { type: String },
  /** Repo-relative docs example root, e.g. "example" or "en/example" */
  basePath: { type: String, default: "example" },
});

const handleShowCode = () => {
  model.value = !model.value;
};

const toEdit = () => {
  window.open(
    `https://github.com/birdpaper-team/birdpaper-ui/blob/v3/docs/src/${props.basePath}/${props.src}.vue`
  );
};
</script>
