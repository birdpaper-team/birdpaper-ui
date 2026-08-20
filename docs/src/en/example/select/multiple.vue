<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Multiple</div>
      <bp-select v-model="val1" multiple placeholder="Please select" style="width: 240px">
        <bp-option :value="1">Option 1</bp-option>
        <bp-option :value="2">Option 2</bp-option>
        <bp-option :value="3">Option 3</bp-option>
        <bp-option :value="4">Option 4</bp-option>
        <bp-option :value="5">Option 5</bp-option>
      </bp-select>
    </div>
    <div>
      <div class="label">Show at most 2 tags</div>
      <bp-select v-model="val2" multiple :max-tag-count="2" placeholder="Please select" style="width: 240px">
        <bp-option :value="1">Option 1</bp-option>
        <bp-option :value="2">Option 2</bp-option>
        <bp-option :value="3">Option 3</bp-option>
        <bp-option :value="4">Option 4</bp-option>
      </bp-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref([1, 3]);
const val2 = ref([1, 2, 3, 4]);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
