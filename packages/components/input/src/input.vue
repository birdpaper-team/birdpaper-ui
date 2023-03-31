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
  /** 绑定值 Binding value */
  modelValue: { type: String, default: "" },
  /** 输入框尺寸 Size of the input */
  size: { type: String as PropType<InputSize>, default: "normal" },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 是否只读状态 Readonly or not */
  readonly: { type: Boolean, default: false },
  /** 是否警示状态 Danger or not */
  isDanger: { type: Boolean, default: false },
  /** 占位提示文字 The placeholder text*/
  placeholder: { type: String, default: "" },
  /** 限制输入最大长度 Restricts the maximum input length */
  maxLength: { type: Number, default: 0 },
  /** 是否展示字数限制提示 Display word limit prompts or not */
  showLimit: { type: Boolean, default: false },
});

const emits = defineEmits<{
  (e: "update:modelValue", data: string): void;
  (e: "focus"): void;
  (e: "keyup"): void;
  (e: "blur"): void;
  (e: "clear"): void;
}>();

const inpClass = computed(() => {
  const status = getStatus();
  return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
});

function getStatus() {
  return (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal";
}
</script>
