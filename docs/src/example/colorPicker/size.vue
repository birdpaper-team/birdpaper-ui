<template>
  <div style="display: flex; gap: 40px; align-items: flex-end">
    <div>
      <div class="label">mini</div>
      <bp-color-picker v-model="val" size="mini" />
    </div>
    <div>
      <div class="label">small</div>
      <bp-color-picker v-model="val" size="small" />
    </div>
    <div>
      <div class="label">default</div>
      <bp-color-picker v-model="val" />
    </div>
    <div>
      <div class="label">large</div>
      <bp-color-picker v-model="val" size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("#165dff");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
