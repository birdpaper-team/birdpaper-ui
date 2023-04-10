<template>
  <div :class="inpClass">
    <input
      ref="inpRef"
      type="text"
      class="bp-input-inner"
      :spellcheck="false"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
      @keypress="onKeypress"
      @keyup="onKeyup"
      @input="onInput"
    />
    <div class="suffix" v-show="!slot.suffix && showClear">
      <template v-if="!slot.suffix">
        <i v-if="showClear" class="ri-close-line clear-icon" @click="handleClearInp"></i>
      </template>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="input">
import { computed, PropType, ref, useSlots } from "vue";
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
  maxlength: { type: Number, default: null },
  /** 是否展示字数限制提示 Display word limit prompts or not */
  showLimit: { type: Boolean, default: false },
  /** 是否允许清空 Clearable or not */
  clearable: { type: Boolean, default: false },
});

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "input"): void;
  (e: "focus"): void;
  (e: "blur"): void;
  (e: "keydown"): void;
  (e: "keypress"): void;
  (e: "keyup"): void;
}>();

const slot = useSlots();
const inpRef = ref();

const inpClass = computed(() => {
  const status = getStatus();
  return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
});

const showClear = computed(() => {
  return props.modelValue && props.clearable && !props.disabled && !props.readonly;
});

function getStatus() {
  return (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal";
}

const onFocus = () => emits("focus");
const onBlur = () => emits("blur");
const onKeydown = () => emits("keydown");
const onKeypress = () => emits("keypress");
const onKeyup = () => emits("keyup");

const handleFocus = () => {
  inpRef.value.focus();
};

const onInput = (e: { target: { value: string } }) => {
  const targetValue = (e.target as HTMLInputElement).value;
  emits("update:modelValue", targetValue);
};

const handleClearInp = () => {
  emits("update:modelValue", "");
  handleFocus();
};
</script>
