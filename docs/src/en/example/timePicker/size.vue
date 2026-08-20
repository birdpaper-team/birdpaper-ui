<template>
  <div style="display: flex; gap: 40px; align-items: flex-end">
    <div>
      <div class="label">mini</div>
      <bp-time-picker v-model="val" size="mini" style="width: 140px" placeholder="Please select" />
    </div>
    <div>
      <div class="label">small</div>
      <bp-time-picker v-model="val" size="small" style="width: 160px" placeholder="Please select" />
    </div>
    <div>
      <div class="label">default</div>
      <bp-time-picker v-model="val" style="width: 180px" placeholder="Please select" />
    </div>
    <div>
      <div class="label">large</div>
      <bp-time-picker v-model="val" size="large" style="width: 200px" placeholder="Please select" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
