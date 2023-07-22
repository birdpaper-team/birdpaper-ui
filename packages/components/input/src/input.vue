<template>
  <div :class="inpClass">
    <input
      ref="inpRef"
      class="bp-input-inner"
      :type="inpType"
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
    <div class="suffix" v-if="slots.suffix || showClear || showWordLimit || type === 'password'">
      <!-- TODO: Need to Optim -->
      <template v-if="!slots.suffix">
        <!-- 清空按钮 -->
        <i v-if="showClear" class="ri-close-line click-icon" @click="handleClear"></i>
        <!-- 字数限制提示 -->
        <span v-if="showWordLimit" v-text="limitText"></span>
        <!-- 密码/明文切换 -->
        <i
          v-if="type === 'password'"
          @click="triggerPassword"
          :class="['click-icon', showPassword ? 'ri-eye-fill' : 'ri-eye-close-fill']"
        ></i>
      </template>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, nextTick, PropType, ref, useSlots } from "vue";
import { InputSize, InputType } from "./types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: String, default: "" },
    /** 输入框类型 Type of the input */
    type: { type: String as PropType<InputType>, default: InputType.Text },
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
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit, slots }) {
    const name = "bp-input";
    const inpRef = ref();
    const inpType = computed<InputType>(() => (isPasswordType.value ? InputType.Password : InputType.Text));

    const inpClass = computed(() => {
      const status = getStatus();
      return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
    });
    function getStatus() {
      return (
        (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal"
      );
    }

    // 清空文本内容
    const showClear = computed(
      () => props.type === "text" && props.modelValue && props.clearable && !props.disabled && !props.readonly
    );
    const handleClear = () => {
      emit("update:modelValue", "");
      nextTick(() => handleFocus());
    };

    // 输入字数限制
    const showWordLimit = computed(() => {
      return props.maxlength && props.showLimit && props.type === "text";
    });
    const limitText = computed(() => `${props.modelValue.length}/${props.maxlength}`);

    /** 是否明文展示密码类型输入框内容 */
    const showPassword = ref<boolean>(false);
    /** 是否为密码类型输入框 */
    const isPasswordType = computed<boolean>(() => props.type === InputType.Password && !showPassword.value);
    /** 明文/匿文切换 */
    const triggerPassword = () => {
      showPassword.value = !showPassword.value;
      nextTick(() => handleFocus());
    };

    /** 使输入框聚焦 */
    const handleFocus = () => inpRef.value.focus();
    /** 使输入框失焦 */
    const handleBlur = () => inpRef.value.blur();

    const onFocus = () => emit("focus");
    const onBlur = () => emit("blur");
    const onKeypress = () => emit("keypress");
    const onKeyup = () => emit("keyup");

    const onInput = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value;
      emit("update:modelValue", targetValue);
    };

    return {
      inpRef,
      inpType,
      inpClass,
      showClear,
      handleClear,
      handleFocus,
      showPassword,
      showWordLimit,
      limitText,
      slots,
      handleBlur,
      onFocus,
      onBlur,
      onKeypress,
      onKeyup,
      onInput,
      triggerPassword
    };
  },
});
</script>
