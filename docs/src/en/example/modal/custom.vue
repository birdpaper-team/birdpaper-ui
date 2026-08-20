<template>
  <bp-space :size="16">
    <bp-button @click="showHeader = true">Custom header</bp-button>
    <bp-button @click="showContent = true">Custom content</bp-button>
  </bp-space>

  <bp-modal v-model="showHeader" title="Custom header">
    <template #header>
      <div class="custom-header">
        <IconStarFill size="20" style="color: #f7ba2a" />
        <span>Custom title area</span>
      </div>
    </template>
    <p>Header uses a custom slot.</p>
  </bp-modal>

  <bp-modal v-model="showContent" title="Custom content">
    <div class="custom-content">
      <p>Place any custom content here:</p>
      <ul>
        <li>Form</li>
        <li>Table</li>
        <li>Image</li>
      </ul>
    </div>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconStarFill } from "birdpaper-icon";

const showHeader = ref(false);
const showContent = ref(false);
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.custom-content {
  ul {
    padding-left: 20px;
    line-height: 2;
  }
}
</style>
