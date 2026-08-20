<template>
  <bp-space :size="16">
    <bp-button @click="showCustom = true">Custom content</bp-button>
    <bp-button @click="showHeader = true">Custom header</bp-button>
    <bp-button @click="showFooter = true">Custom footer</bp-button>
  </bp-space>

  <bp-drawer v-model="showCustom" title="User details">
    <div class="custom-content">
      <p><strong>Name:</strong>Zhang San</p>
      <p><strong>Email:</strong>zhangsan@example.com</p>
      <p><strong>Dept:</strong>Engineering</p>
    </div>
  </bp-drawer>

  <bp-drawer v-model="showHeader" title="Custom header">
    <template #header>
      <div class="custom-header">
        <IconStarFill size="18" style="color: #f7ba2a" />
        <span>Custom title area</span>
      </div>
    </template>
    <p>Header uses a custom slot.</p>
  </bp-drawer>

  <bp-drawer v-model="showFooter" title="Custom footer">
    <p>Footer uses a custom slot.</p>
    <template #footer>
      <bp-button type="secondary" @click="showFooter = false">Close</bp-button>
      <bp-button status="danger" @click="showFooter = false">Delete</bp-button>
    </template>
  </bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconStarFill } from "birdpaper-icon";

const showCustom = ref(false);
const showHeader = ref(false);
const showFooter = ref(false);
</script>

<style lang="scss" scoped>
.custom-content {
  p {
    line-height: 2.2;
    border-bottom: 1px solid #f0f0f0;
  }
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
</style>
