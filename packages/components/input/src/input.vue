<template>
  <div :class="inpClass">
    <input type="text" :disabled="disabled" :readonly="readonly" class="bp-input-inner" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts" name="input">
import { computed, PropType } from "vue";
import { InputSize } from "./types";
const name = "bp-input";

const props = defineProps({
  /** 输入框尺寸 Size of the input */
  size: { type: String as PropType<InputSize>, default: "normal" },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 是否只读状态 Readonly or not */
  readonly: { type: Boolean, default: false },
  /** 是否错误状态 Error or not */
  isError: { type: Boolean, default: false },
  /** 占位提示文字 The placeholder text*/
  placeholder: { type: String, default: "" },
});

const inpClass = computed(() => {
  const status =
    (props.disabled && `disabled`) || (props.readonly && `readonly`) || (props.isError && `error`) || "normal";
  return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
});
</script>
