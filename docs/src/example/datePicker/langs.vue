<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">中文（默认）</div>
      <bp-date-picker v-model="val" style="width: 200px" placeholder="请选择" />
    </div>
    <div>
      <div class="label">英文</div>
      <bp-date-picker v-model="val2" langs="en" style="width: 200px" placeholder="Select" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
const val2 = ref("");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
