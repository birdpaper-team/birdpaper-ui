<template>
  <bp-select v-model="sizeValue" :disabled="disabled" :option-list="sizeList"></bp-select>
</template>

<script setup>
import { defineProps, defineEmits, ref, watchEffect, watch } from "vue";

const props = defineProps({
  currentPageSize: { type: [String, Number], default: 10 },
  disabled: { type: Boolean, default: false }, // 是否禁用
  pageSize: { type: [Number, String], default: () => 10 }, // 每页显示条数
  sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示个数选择器的选项设置
  tmpString: { type: String, default: "" },
});
const emit = defineEmits(["change"]);

const paramsStr = "{value}";

const sizeValue = ref(props.currentPageSize);
const sizeList = ref([]);

watch(
  () => sizeValue.value,
  (val) => emit("change", val)
);

watchEffect(() => {
  let arr = [];
  for (let i = 0; i < props.sizesList.length; i++) {
    const value = props.sizesList[i];
    arr.push({ label: `${props.tmpString.replace(paramsStr, value)}`, value });
  }
  sizeList.value = arr;
});
</script>

<script>
export default { name: "bp-pagination-size" };
</script>
