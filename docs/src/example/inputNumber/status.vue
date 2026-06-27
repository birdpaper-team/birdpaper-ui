<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">禁用</div>
      <bp-input-number v-model="val" disabled style="width: 180px" />
    </div>
    <div>
      <div class="label">只读</div>
      <bp-input-number v-model="val" readonly style="width: 180px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(42);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
