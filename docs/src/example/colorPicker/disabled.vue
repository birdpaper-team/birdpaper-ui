<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">正常</div>
      <bp-color-picker v-model="val" />
    </div>
    <div>
      <div class="label">禁用</div>
      <bp-color-picker v-model="val" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("#86909c");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
