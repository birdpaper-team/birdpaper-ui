<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">可清空</div>
      <bp-time-picker v-model="val" clearable style="width: 180px" placeholder="请选择" />
    </div>
    <div>
      <div class="label">禁用</div>
      <bp-time-picker v-model="val2" disabled style="width: 180px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
const val2 = ref("14:30:00");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
