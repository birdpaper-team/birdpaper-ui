<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">With unit</div>
      <bp-input-number v-model="val" unit="%" style="width: 180px" />
    </div>
    <div>
      <div class="label">Hide step buttons</div>
      <bp-input-number v-model="val2" hide-button style="width: 180px" placeholder="Manual input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(75);
const val2 = ref<number | "">("");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
