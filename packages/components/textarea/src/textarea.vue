<template>
  <div :class="inpClass">
    <textarea
      ref="inpRef"
      class="bp-textarea-inner"
      :rows="rows"
      :spellcheck="false"
      :disabled="disabled"
      :readonly="readonly"
      :cursor="modelValue.length"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @focus="onFocus"
      @blur="onBlur"
      @keypress="onKeypress"
      @keyup="onKeyup"
      @input="onInput"
    />
    <div class="suffix">
      <!-- 字数限制提示 -->
      <span v-if="showWordLimit" v-text="limitText"></span>
    </div>
  </div>
</template>

<script setup lang="ts" name="Textarea">
import { computed, ref } from "vue";
const name = "bp-textarea";

const props = defineProps({
  /** 绑定值 Binding value */
  modelValue: { type: String, default: "" },
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
  /** 行数 */
  rows: { type: Number, default: 3 },
  /** 是否展示字数限制提示 Display word limit prompts or not */
  showLimit: { type: Boolean, default: false },
});
const emits = defineEmits<{
  "update:modelValue": [value: string];
  input: [];
  focus: [];
  blur: [];
  keypress: [];
  keyup: [];
}>();

const inpRef = ref();

const inpClass = computed(() => {
  const status = getStatus();
  return [name, `${name}-status-${status}`];
});
function getStatus() {
  return (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal";
}

// 输入字数限制
const showWordLimit = computed(() => {
  return props.maxlength && props.showLimit;
});
const limitText = computed(() => `${props.modelValue.length}/${props.maxlength}`);

const onFocus = () => emits("focus");
const onBlur = () => emits("blur");
const onKeypress = () => emits("keypress");
const onKeyup = () => emits("keyup");

const onInput = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value;
  emits("update:modelValue", targetValue);
};
</script>
