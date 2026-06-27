<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">正常</div>
      <bp-input-tag v-model="val" placeholder="回车添加" style="width: 280px" />
    </div>
    <div>
      <div class="label">禁用</div>
      <bp-input-tag v-model="val" disabled style="width: 280px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(["Vue", "React"]);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
