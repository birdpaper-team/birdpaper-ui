<template>
  <div style="display: flex; gap: 40px; align-items: flex-end">
    <div>
      <div class="label">mini</div>
      <bp-input-number v-model="val" size="mini" style="width: 120px" />
    </div>
    <div>
      <div class="label">small</div>
      <bp-input-number v-model="val" size="small" style="width: 140px" />
    </div>
    <div>
      <div class="label">default</div>
      <bp-input-number v-model="val" style="width: 180px" />
    </div>
    <div>
      <div class="label">large</div>
      <bp-input-number v-model="val" size="large" style="width: 200px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(100);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
