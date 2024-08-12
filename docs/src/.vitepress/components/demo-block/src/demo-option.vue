<template>
  <div :class="['icon-item', { active: model }]" @click="handleShowCode">
    <IconCodeLine size="13" />
  </div>
  <!-- <bp-space size="mini" justify="flex-end">
    <bp-tooltip content="展示代码">
      <div
        :class="['icon-item', { active: showCode }]"
        @click="showCode = !showCode"
      >
        <IconCodeLine size="13" />
      </div>
    </bp-tooltip>
    <bp-tooltip content="在 StackBlitz 中调试">
      <div class="icon-item">
        <IconFlashlightLine size="13" />
      </div>
    </bp-tooltip>
    <bp-tooltip content="在 Github 上编辑">
      <div class="icon-item">
        <IconEditLine size="13" />
      </div>
    </bp-tooltip>
  </bp-space> -->
</template>

<script setup lang="ts">
const model = defineModel<boolean>({
  required: true,
});

const handleShowCode = () => {
  model.value = !model.value;
};
</script>
