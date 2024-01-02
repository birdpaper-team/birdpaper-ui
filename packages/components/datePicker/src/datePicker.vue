<template>
  <bp-trigger transition="fade-dropdown" :hideTrigger="hideTrigger" :disabled="disabled" :popup-offset="10" position="left-bottom">
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
    <template #content>
      <picker-panel :langs="langs"></picker-panel>
    </template>
  </bp-trigger>
</template>

<script lang="ts">
import { InputSize } from "components/input/src/types";
import { defineComponent, PropType, provide, ref, watch } from "vue";
import pickerPanel from "./pickerPanel.vue";
import { IconCalendarLine } from "birdpaper-icon";
import { dateInjectionKey, LangsType } from "./types";

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
    readonly: { type: Boolean, default: true },
    /** 是否警示状态 Danger or not */
    isDanger: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false },
    /** 语言包 */
    langs: { type: String as PropType<LangsType>, default: "zh-cn" },
    /** 值格式 */
    valueFormat: { type: String, default: "YYYY-MM-DD" },
    /** 隐藏触发器 */
    hideTrigger: { type: Boolean, default: false },
  },
  components: { pickerPanel, IconCalendarLine },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit, slots }) {
    const name = "bp-date-picker";
    const inputRef = ref();

    const global_value = ref<string>(props.modelValue || "");

    provide(dateInjectionKey, {
      modelValue: props.modelValue,
      langs: props.langs,
      valueFormat: props.valueFormat,
      onSelect: (v: string, payload: any) => {
        global_value.value = v;
        emit("update:modelValue", global_value.value);
      },
    });

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
      onBlur,
    };
  },
});
</script>
