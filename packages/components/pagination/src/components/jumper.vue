<template>
  <li :class="[`${name}-item`, `${name}-jumper`]">
    <span v-if="text.prefix" class="page-text">{{ text.prefix }}</span>
    <!-- TODO：缺少限制数字类型输入 -->
    <bp-input v-model="val" size="small" @blur="handleBlur"></bp-input>
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
const val = ref("");
const text = reactive({ prefix: "", suffix: "" });

const handleBlur = () => {
  let num = Number(val.value) ?? 1;
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
