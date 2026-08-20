<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Disabled</div>
      <bp-input-number v-model="val" disabled style="width: 180px" />
    </div>
    <div>
      <div class="label">Read-only</div>
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
