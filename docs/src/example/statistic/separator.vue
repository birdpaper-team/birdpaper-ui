<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">千分位分隔</div>
      <bp-statistic v-model="val1" show-separator />
    </div>
    <div>
      <div class="label">自定义分隔符</div>
      <bp-statistic v-model="val2" show-separator separator="." />
    </div>
    <div>
      <div class="label">带精度 + 千分位</div>
      <bp-statistic v-model="val3" show-separator :precision="2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(1234567);
const val2 = ref(1234567);
const val3 = ref(1234567.89);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 8px;
}
</style>
