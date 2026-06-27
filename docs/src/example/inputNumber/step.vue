<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">基础用法</div>
      <bp-input-number v-model="val" style="width: 180px" placeholder="请输入" />
    </div>
    <div>
      <div class="label">步进 5，范围 0-100</div>
      <bp-input-number v-model="val2" :step="5" :min="0" :max="100" style="width: 180px" />
    </div>
    <div>
      <div class="label">步进 0.1</div>
      <bp-input-number v-model="val3" :step="0.1" :precision="2" style="width: 180px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<number | "">("");
const val2 = ref(50);
const val3 = ref(1.5);
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
