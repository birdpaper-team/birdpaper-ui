<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Read-only</div>
      <bp-rate v-model="val" readonly />
    </div>
    <div>
      <div class="label">Disabled</div>
      <bp-rate v-model="val" disabled />
    </div>
    <div>
      <div class="label">Read-only half-star</div>
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
