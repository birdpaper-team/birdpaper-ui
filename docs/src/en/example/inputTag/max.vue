<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">Show at most 3 tags</div>
      <bp-input-tag v-model="val" :max-tag-count="3" placeholder="Press Enter to add" style="width: 280px" />
      <div class="value">All tags: {{ val }}</div>
    </div>
    <div>
      <div class="label">Show at most 2 tags</div>
      <bp-input-tag v-model="val2" :max-tag-count="2" placeholder="Press Enter to add" style="width: 280px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(["Vue", "React", "Angular", "Svelte"]);
const val2 = ref(["Tag A", "Tag B", "Tag C"]);
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
