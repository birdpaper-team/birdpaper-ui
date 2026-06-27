<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">整数（默认）</div>
      <bp-input-number v-model="val1" style="width: 180px" />
    </div>
    <div>
      <div class="label">保留 2 位小数</div>
      <bp-input-number v-model="val2" :precision="2" style="width: 180px" />
    </div>
    <div>
      <div class="label">保留 4 位小数</div>
      <bp-input-number v-model="val3" :precision="4" :step="0.0001" style="width: 180px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(10);
const val2 = ref(3.14);
const val3 = ref(2.7182);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
