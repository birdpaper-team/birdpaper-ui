<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Normal</div>
      <bp-color-picker v-model="val" />
    </div>
    <div>
      <div class="label">Disabled</div>
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
