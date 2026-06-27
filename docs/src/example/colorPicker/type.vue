<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">HEX 格式（默认）</div>
      <bp-color-picker v-model="hexVal" />
      <div class="value">当前值：{{ hexVal }}</div>
    </div>
    <div>
      <div class="label">RGB 格式</div>
      <bp-color-picker v-model="rgbVal" value-type="rgb" />
      <div class="value">当前值：{{ rgbVal }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hexVal = ref("#165dff");
const rgbVal = ref("rgba(22, 93, 255, 1)");
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
