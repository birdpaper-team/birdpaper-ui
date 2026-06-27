<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">5 颗星（默认）</div>
      <bp-rate v-model="val1" />
    </div>
    <div>
      <div class="label">8 颗星</div>
      <bp-rate v-model="val2" :count="8" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val1 = ref(3);
const val2 = ref(5);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
