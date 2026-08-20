<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Single</div>
      <bp-select v-model="val" placeholder="Please select" style="width: 240px">
        <bp-option value="beijing">Beijing</bp-option>
        <bp-option value="shanghai">Shanghai</bp-option>
        <bp-option value="guangzhou">Guangzhou</bp-option>
        <bp-option value="shenzhen">Shenzhen</bp-option>
      </bp-select>
      <div class="value">Current: {{ val }}</div>
    </div>
    <div>
      <div class="label">Using the label prop</div>
      <bp-select v-model="val2" placeholder="Please select" style="width: 240px">
        <bp-option :value="1" label="Option 1" />
        <bp-option :value="2" label="Option 2" />
        <bp-option :value="3" label="Option 3" />
      </bp-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
const val2 = ref<number | "">("");
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
