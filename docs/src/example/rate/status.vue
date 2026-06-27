<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">只读</div>
      <bp-rate v-model="val" readonly />
    </div>
    <div>
      <div class="label">禁用</div>
      <bp-rate v-model="val" disabled />
    </div>
    <div>
      <div class="label">只读半星</div>
      <bp-rate v-model="halfVal" readonly half />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(3);
const halfVal = ref(3.5);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
