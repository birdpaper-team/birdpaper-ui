<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">最多显示 3 个标签</div>
      <bp-input-tag v-model="val" :max-tag-count="3" placeholder="回车添加" style="width: 280px" />
      <div class="value">全部标签：{{ val }}</div>
    </div>
    <div>
      <div class="label">最多显示 2 个标签</div>
      <bp-input-tag v-model="val2" :max-tag-count="2" placeholder="回车添加" style="width: 280px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(["Vue", "React", "Angular", "Svelte"]);
const val2 = ref(["标签A", "标签B", "标签C"]);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
.value {
  font-size: 13px;
  color: #4e5969;
  margin-top: 8px;
}
</style>
