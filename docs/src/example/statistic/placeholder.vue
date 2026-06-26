<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">默认占位</div>
      <bp-statistic />
    </div>
    <div>
      <div class="label">自定义占位</div>
      <bp-statistic placeholder="暂无数据" />
    </div>
    <div>
      <div class="label">切换数值</div>
      <bp-button size="small" type="plain" @click="toggle">切换</bp-button>
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
