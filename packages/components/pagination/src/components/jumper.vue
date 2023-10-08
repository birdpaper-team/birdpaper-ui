<template>
  <li :class="[`${name}-item`, `${name}-jumper`]">
    <span v-if="text.prefix" class="page-text">{{ text.prefix }}</span>
    <bp-input-number
      :min="1"
      :precision="0"
      hide-button
      v-model="val"
      size="small"
      @blur="handleBlur"
    ></bp-input-number>
    <span v-if="text.suffix" class="page-text">{{ text.suffix }}</span>
  </li>
</template>

<script setup lang="ts" name="PaginationJumper">
import { warn } from "../../../../utils/util";
import { reactive, ref, watchEffect } from "vue";

const props = defineProps({
  currentPage: { type: Number, default: 1 },
  pages: { type: Number, default: 0 },
  tmpString: { type: String, default: "前往{jumper}" },
});
const emits = defineEmits<{
  (e: "change", pageNum: number): void;
}>();

const name = "bp-pagination";
const paramsStr = "{jumper}";
const val = ref<number>();
const text = reactive({ prefix: "", suffix: "" });

const handleBlur = () => {
  let num = val.value ?? 1;
  num < 1 && (num = 1);
  num > props.pages && (num = props.pages);

  emits("change", num);
};

watchEffect(() => {
  try {
    const str = props.tmpString.split(paramsStr);
    if (str.length > 1) {
      text.prefix = str[0];
      text.suffix = str[1];
    }
  } catch (error) {
    warn("Pagination", "Split jumper paramsStr failure");
  }
});
</script>
