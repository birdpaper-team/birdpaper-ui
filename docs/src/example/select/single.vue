<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">单选</div>
      <bp-select v-model="val" placeholder="请选择" style="width: 240px">
        <bp-option value="beijing">北京</bp-option>
        <bp-option value="shanghai">上海</bp-option>
        <bp-option value="guangzhou">广州</bp-option>
        <bp-option value="shenzhen">深圳</bp-option>
      </bp-select>
      <div class="value">当前值：{{ val }}</div>
    </div>
    <div>
      <div class="label">使用 label 属性</div>
      <bp-select v-model="val2" placeholder="请选择" style="width: 240px">
        <bp-option :value="1" label="选项一" />
        <bp-option :value="2" label="选项二" />
        <bp-option :value="3" label="选项三" />
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
