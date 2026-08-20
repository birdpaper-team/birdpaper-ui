<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">With unit</div>
      <bp-statistic v-model="val1" unit="%" :precision="1" />
    </div>
    <div>
      <div class="label">Custom prefix</div>
      <bp-statistic v-model="val2">
        <template #prefix>
          <span style="font-size: 16px; margin-right: 4px">💰</span>
        </template>
      </bp-statistic>
    </div>
    <div>
      <div class="label">Currency prefix</div>
      <bp-statistic v-model="val3" show-separator>
        <template #prefix>
          <span style="font-size: 16px; margin-right: 2px">¥</span>
        </template>
      </bp-statistic>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(99.9);
const val2 = ref(2048);
const val3 = ref(19999);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 8px;
}
</style>
