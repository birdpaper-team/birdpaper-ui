<template>
  <div :class="inpClass">
    <textarea
      ref="inpRef"
      class="bp-textarea-inner"
      :rows="rows"
      :spellcheck="false"
      :disabled="disabled"
      :readonly="readonly"
      :cursor="modelValue?.length"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @focus="onFocus"
      @blur="onBlur"
      @keypress="onKeypress"
      @keyup="onKeyup"
      @input="onInput" />
    <div class="suffix">
      <template v-if="!slots.suffix">
        <!-- 清空按钮 -->
        <IconCloseLine v-if="showClear" class="click-icon" @click="handleClear" />
        <!-- 字数限制提示 -->
        <span v-if="showWordLimit" v-text="limitText"></span>
      </template>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { computed, ref } from "vue";
import { IconCloseLine } from "birdpaper-icon";

export default defineComponent({
  name: "Textarea",
  props: {
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
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false },
  },
  components: { IconCloseLine },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit, slots }) {
    const name = "bp-textarea";
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
    const limitText = computed(() => `${props.modelValue?.length || 0}/${props.maxlength}`);

    /** 使输入框聚焦 */
    const handleFocus = () => inpRef.value.focus();

    const showClear = computed(() => props.modelValue && props.clearable && !props.disabled && !props.readonly);
    const handleClear = () => {
      emit("update:modelValue", "");
      nextTick(() => handleFocus());
    };

    const onFocus = () => emit("focus");
    const onBlur = () => emit("blur");
    const onKeypress = () => emit("keypress");
    const onKeyup = () => emit("keyup");

    const onInput = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value;
      emit("update:modelValue", targetValue);
    };

    return {
      name,
      inpRef,
      inpClass,
      getStatus,
      showWordLimit,
      limitText,
      onFocus,
      onBlur,
      onKeypress,
      onKeyup,
      onInput,
      slots,
      showClear,
      handleClear,
    };
  },
});
</script>
