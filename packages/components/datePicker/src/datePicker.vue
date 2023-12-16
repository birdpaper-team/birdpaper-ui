<template>
  <bp-input
    ref="inputRef"
    :modelValue="global_value"
    :class="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :is-danger="isDanger"
    :size="size"
    @input="onInput"
    @blur="onBlur"
  >
    <template #suffix>
      <IconCalendarLine />
    </template>
  </bp-input>
</template>

<script lang="ts">
import { InputSize } from "components/input/src/types";
import { defineComponent, PropType, ref, watch } from "vue";
import { IconCalendarLine } from "birdpaper-icon";

export default defineComponent({
  name: "DatePicker",
  props: {
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
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false },
  },
  components: { IconCalendarLine },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit, slots }) {
    const name = "bp-date-picker";
    const inputRef = ref();

    const global_value = ref<string>(props.modelValue || "");

    const onInput = () => {};
    const onBlur = () => {};

    watch(
      () => props.modelValue,
      (value?: string) => {
        global_value.value = value || "";
      }
    );

    return {
      name,
      inputRef,
      global_value,
      onInput,
      onBlur
    };
  },
});
</script>
