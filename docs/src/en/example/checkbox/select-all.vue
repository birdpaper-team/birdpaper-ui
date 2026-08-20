<template>
  <bp-space>
    <bp-checkbox v-model:check="isSelectAll" :indeterminate @change="onSelectAllChange">Select all</bp-checkbox>
  </bp-space>

  {{ val }}
  <bp-checkbox-group v-model="val" style="margin-top: 20px" @change="onChange">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

/**
 * Handle checkbox selection change.
 * @param {string[]} e - Selected values.
 *
 * If empty, set `isSelectAll` to false.
 * If all selected, set `indeterminate` to false.
 * Otherwise set `indeterminate` to true.
 */
const isSelectAll = ref(false);
const indeterminate = ref(false);
const onChange = (e: string[]) => {
  if (!e.length) return (isSelectAll.value = false);

  isSelectAll.value = true;
  if (e.length === options.length) {
    indeterminate.value = false;
    return
  }

  indeterminate.value = true;
};

const val = ref<string[]>([]);
const onSelectAllChange = (v: boolean) => {
  if (!v) return (val.value = []);
  val.value = [...options];
};
</script>
