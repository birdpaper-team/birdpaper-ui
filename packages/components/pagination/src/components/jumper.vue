<template>
  <li :class="[`${name}-item`, `${name}-jumper`]">
    <span v-if="text.prefix" class="page-text">{{ text.prefix }}</span>
    <bp-input v-model="val" size="small" @blur="handleBlur"></bp-input>
    <span v-if="text.suffix" class="page-text">{{ text.suffix }}</span>
  </li>
</template>

<script setup lang="ts" name="PaginationJumper">
import { reactive, ref, watchEffect } from "vue";

const props = defineProps({
  currentPage: { type: Number, default: 1 },
  pages: { type: Number, default: 0 },
  disabled: { type: Boolean, default: false },
  tmpString: { type: String, default: "跳至{jumper}页" },
});
const emits = defineEmits<{
  (e: "change", type: "page", pageNum: number): void;
}>();

const name = "bp-pagination";
const paramsStr = "{jumper}";
const val = ref("");
const text = reactive({ prefix: "", suffix: "" });

const handleBlur = () => {
  if (props.disabled) return;

  let num = Number(val.value);
  num < 1 && (num = 1);
  num > props.pages && (num = props.pages);
  emits("change", "page", num);
};

watchEffect(() => {
  const str = props.tmpString.split(paramsStr);
  if (str.length > 1) {
    text.prefix = str[0];
    text.suffix = str[1];
  }
});
</script>
