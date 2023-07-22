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

<script lang="ts">
import { defineComponent } from "vue";
import { computed, ref } from "vue";

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
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit }) {
    const name = "bp-textarea";
    const inpRef = ref();

    const inpClass = computed(() => {
      const status = getStatus();
      return [name, `${name}-status-${status}`];
    });
    function getStatus() {
      return (
        (props.disabled && "disabled") || (props.readonly && "readonly") || (props.isDanger && "danger") || "normal"
      );
    }

    // 输入字数限制
    const showWordLimit = computed(() => {
      return props.maxlength && props.showLimit;
    });
    const limitText = computed(() => `${props.modelValue.length}/${props.maxlength}`);

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
    };
  },
});
</script>
