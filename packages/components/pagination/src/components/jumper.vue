<template>
  <li :class="cls">
    <span v-if="text.prefix" class="page-text">{{ text.prefix }}</span>
    <bp-input-number
      :min="1"
      :precision="0"
      :disabled
      :size
      hide-button
      v-model="val"
      @blur="handleBlur"
    ></bp-input-number>
    <span v-if="text.suffix" class="page-text">{{ text.suffix }}</span>
  </li>
</template>

<script setup lang="ts">
import { InputSize } from "@birdpaper-ui/components/input/src/types";
import BpInputNumber from "@birdpaper-ui/components/inputNumber/index";
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, PropType, reactive, ref, watchEffect } from "vue";

const props = defineProps({
  /**
   * @type Number
   * @description: The current page.
   * @default 1
   */
  currentPage: { type: Number, default: 1 },
  /**
   * @type InputSize
   * @description Pagination sizes.
   * @default default
   */
  size: { type: String as PropType<InputSize>, default: "default" },
  /**
   * @type Boolean
   * @description: Whether the button is disabled.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type Number
   * @description: The total pages.
   * @default 0
   */
  pages: { type: Number, default: 0 },
  /**
   * @type String
   * @description: The template string.
   * @default ""
   */
  tmpString: { type: String, default: "" },
  /**
   * @type String
   * @description: The extra class name.
   * @default ""
   */
  extraClass: { type: String, default: "" },
});
const emits = defineEmits<{
  (e: "change", pageNum: number | ""): void;
}>();

const { clsBlockName } = useNamespace("pagination-jumper");
const cls = computed(() => [clsBlockName.value, props.extraClass]);

const paramsStr = "{jumper}";
const val = ref<number | "">("");
const text = reactive({ prefix: "", suffix: "" });

const handleBlur = () => {
  let num = Number(val.value) || NaN;
  if (isNaN(num)) {
    val.value = "";
    return;
  }

  num < 1 && (num = 1);
  num > props.pages && (num = props.pages);

  val.value = num;
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
    text.prefix = "";
    text.suffix = "";
  }
});
</script>
