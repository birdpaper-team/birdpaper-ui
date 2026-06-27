<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">带单位</div>
      <bp-input-number v-model="val" unit="%" style="width: 180px" />
    </div>
    <div>
      <div class="label">隐藏步进按钮</div>
      <bp-input-number v-model="val2" hide-button style="width: 180px" placeholder="手动输入" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(75);
const val2 = ref<number | "">("");
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
