<template>
  <bp-space>
    <bp-checkbox v-model:check="isSelectAll" :indeterminate @change="onSelectAllChange">全选</bp-checkbox>
  </bp-space>

  <bp-checkbox-group v-model="val" style="margin-top: 20px" @change="onChange">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ["选项一", "选项二", "选项三", "选项四"];

/**
 * 处理复选框选择的更改事件。
 * @param {string[]} e - 选中的复选框值数组。
 *
 * 如果数组为空，将 `isSelectAll` 设置为 false。
 * 如果数组长度等于选项总数，将 `indeterminate` 设置为 false。
 * 否则，将 `indeterminate` 设置为 true。
 */
const isSelectAll = ref(false);
const indeterminate = ref(false);
const onChange = (e: string[]) => {
  if (!e.length) return (isSelectAll.value = false);

  isSelectAll.value = true;
  if (e.length === options.length) return (indeterminate.value = false);

  indeterminate.value = true;
};

const val = ref<string[]>([]);
const onSelectAllChange = (v: boolean) => {
  if (!v) return (val.value = []);
  val.value = [...options];
};
</script>
