<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">多选</div>
      <bp-select v-model="val1" multiple placeholder="请选择" style="width: 240px">
        <bp-option :value="1">选项 1</bp-option>
        <bp-option :value="2">选项 2</bp-option>
        <bp-option :value="3">选项 3</bp-option>
        <bp-option :value="4">选项 4</bp-option>
        <bp-option :value="5">选项 5</bp-option>
      </bp-select>
    </div>
    <div>
      <div class="label">最多显示 2 个标签</div>
      <bp-select v-model="val2" multiple :max-tag-count="2" placeholder="请选择" style="width: 240px">
        <bp-option :value="1">选项 1</bp-option>
        <bp-option :value="2">选项 2</bp-option>
        <bp-option :value="3">选项 3</bp-option>
        <bp-option :value="4">选项 4</bp-option>
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
