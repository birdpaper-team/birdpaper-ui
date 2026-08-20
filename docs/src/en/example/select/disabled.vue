<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Disabled option</div>
      <bp-select v-model="val" placeholder="Please select" style="width: 240px">
        <bp-option value="a">Option A</bp-option>
        <bp-option value="b" disabled>Option B (disabled)</bp-option>
        <bp-option value="c">Option C</bp-option>
        <bp-option value="d" disabled>Option D (disabled)</bp-option>
      </bp-select>
    </div>
    <div>
      <div class="label">Disable the entire selector</div>
      <bp-select v-model="val2" disabled placeholder="Please select" style="width: 240px">
        <bp-option value="a">Option A</bp-option>
        <bp-option value="b">Option B</bp-option>
      </bp-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
const val2 = ref("a");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
