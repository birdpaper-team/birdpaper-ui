<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Clearable</div>
      <bp-date-picker v-model="val" clearable style="width: 200px" placeholder="Please select" />
    </div>
    <div>
      <div class="label">Disabled</div>
      <bp-date-picker v-model="val2" disabled style="width: 200px" />
    </div>
    <div>
      <div class="label">Disabled dates</div>
      <bp-date-picker v-model="val3" :disabled-date="disabledDate" style="width: 200px" placeholder="Please select" />
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
