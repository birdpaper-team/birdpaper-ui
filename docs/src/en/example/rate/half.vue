<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div class="label">Full-star rating</div>
      <bp-rate v-model="val1" />
    </div>
    <div>
      <div class="label">Half-star rating</div>
      <bp-rate v-model="val2" half />
    </div>
    <div>
      <div class="label">Current: {{ val2 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(3);
const val2 = ref(2.5);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
