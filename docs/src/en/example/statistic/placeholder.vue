<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Default placeholder</div>
      <bp-statistic />
    </div>
    <div>
      <div class="label">Custom placeholder</div>
      <bp-statistic placeholder="No data" />
    </div>
    <div>
      <div class="label">Toggle value</div>
      <bp-button size="small" type="plain" @click="toggle">Toggle</bp-button>
      <bp-statistic animation v-model="val" style="margin-top: 8px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<number | undefined>(undefined);
const toggle = () => {
  val.value = val.value === undefined ? 2026 : undefined;
};
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 8px;
}
</style>
