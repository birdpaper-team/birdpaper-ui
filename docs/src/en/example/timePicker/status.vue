<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Clearable</div>
      <bp-time-picker v-model="val" clearable style="width: 180px" placeholder="Please select" />
    </div>
    <div>
      <div class="label">Disabled</div>
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
