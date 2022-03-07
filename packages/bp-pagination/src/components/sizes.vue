<template>
  <bp-select v-model="sizeValue" :option-list="sizeList"></bp-select>
</template>

<script setup>
import { defineProps, defineEmits, ref, watchEffect, reactive, watch } from "vue";

const props = defineProps({
  currentPageSize: { type: [String, Number], default: 10 },
  disabled: { type: Boolean, default: false }, // 是否禁用
  pageSize: { type: [Number, String], default: () => 10 }, // 每页显示条数
  sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示个数选择器的选项设置
});
const emit = defineEmits(["change"]);

const sizeValue = ref("");
const sizeList = ref([]);

watch(
  () => sizeValue.value,
  (val) => emit("change", sizeValue.value)
);

watchEffect(() => {
  sizeValue.value = props.currentPageSize;
});

watchEffect(() => {
  let arr = [];
  for (let i = 0; i < props.sizesList.length; i++) {
    const value = props.sizesList[i];
    arr.push({ label: `${value}条/页`, value });
  }
  sizeList.value = arr;
});
</script>

<script>
export default { name: "bp-pagination-size" };
</script>
