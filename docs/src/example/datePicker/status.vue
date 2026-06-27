<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">可清空</div>
      <bp-date-picker v-model="val" clearable style="width: 200px" placeholder="请选择" />
    </div>
    <div>
      <div class="label">禁用</div>
      <bp-date-picker v-model="val2" disabled style="width: 200px" />
    </div>
    <div>
      <div class="label">禁用日期</div>
      <bp-date-picker v-model="val3" :disabled-date="disabledDate" style="width: 200px" placeholder="请选择" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";

const val = ref("");
const val2 = ref("2024-06-15");
const val3 = ref("");

const disabledDate = (current: string) => dayjs(current).isBefore(dayjs().subtract(1, "day"));
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
