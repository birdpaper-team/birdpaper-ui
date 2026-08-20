<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Date range</div>
      <bp-date-range-picker v-model="val" style="width: 320px" :placeholder="['Start date', 'End date']" />
      <div class="value">Current: {{ val }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<string[]>([]);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
.value {
  font-size: 13px;
  color: #4e5969;
  margin-top: 8px;
}
</style>
