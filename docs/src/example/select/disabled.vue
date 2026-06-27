<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">禁用选项</div>
      <bp-select v-model="val" placeholder="请选择" style="width: 240px">
        <bp-option value="a">选项 A</bp-option>
        <bp-option value="b" disabled>选项 B（禁用）</bp-option>
        <bp-option value="c">选项 C</bp-option>
        <bp-option value="d" disabled>选项 D（禁用）</bp-option>
      </bp-select>
    </div>
    <div>
      <div class="label">禁用整个选择器</div>
      <bp-select v-model="val2" disabled placeholder="请选择" style="width: 240px">
        <bp-option value="a">选项 A</bp-option>
        <bp-option value="b">选项 B</bp-option>
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
