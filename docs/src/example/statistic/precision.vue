<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">无小数 (默认)</div>
      <bp-statistic v-model="val1" />
    </div>
    <div>
      <div class="label">保留 2 位</div>
      <bp-statistic v-model="val2" :precision="2" />
    </div>
    <div>
      <div class="label">保留 4 位</div>
      <bp-statistic v-model="val3" :precision="4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(3);
const val2 = ref(3.14);
const val3 = ref(3.1415926);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 8px;
}
</style>
