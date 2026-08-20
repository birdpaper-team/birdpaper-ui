<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Custom color</div>
      <bp-statistic v-model="val1" :precision="1" unit="%" color="#00b42a" />
    </div>
    <div>
      <div class="label">Warning color</div>
      <bp-statistic v-model="val2" show-separator color="#ff7d00" unit="people" />
    </div>
    <div>
      <div class="label">Custom font size</div>
      <bp-statistic v-model="val3" font-size="40px" />
    </div>
    <div>
      <div class="label">Different font sizes for integer/decimal</div>
      <bp-statistic v-model="val4" :precision="1" :font-size="['32px', '18px']" unit="%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(76.5);
const val2 = ref(3200);
const val3 = ref(42);
const val4 = ref(99.8);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 8px;
}
</style>
