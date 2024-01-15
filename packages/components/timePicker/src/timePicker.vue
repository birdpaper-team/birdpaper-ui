<template>
  <bp-trigger
    v-model:popupVisible="showPopup"
    transition="fade-dropdown"
    :hideTrigger="hideTrigger"
    :disabled="disabled"
    :popup-offset="10"
    position="left-bottom"
  >
    <bp-input
      ref="inputRef"
      v-model="global_value"
      :class="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :is-danger="isDanger"
      :clearable="clearable"
      :size="size"
      @input="onInput"
      @blur="onBlur"
    >
      <template #perfix>
        <IconTimeLine  />
      </template>
    </bp-input>
    <template #content>
      <picker-panel></picker-panel>
    </template>
  </bp-trigger>
</template>

<script lang="ts">
import { InputSize } from "components/input/src/types";
import { IconTimeLine } from "birdpaper-icon";
import pickerPanel from "./pickerPanel.vue";
import { defineComponent, PropType, provide, ref, watch } from "vue";

export default defineComponent({
  name: "TimePicker",
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
    /** 值格式 */
    valueFormat: { type: String, default: "YYYY-MM-DD" },
    /** 隐藏触发器 */
    hideTrigger: { type: Boolean, default: false },
  },
  components: { pickerPanel, IconTimeLine },
  emits: ["update:modelValue", "input", "blur"],
  setup(props, { emit }) {
    const name = "bp-time-picker";
    const inputRef = ref();

    const showPopup = ref<boolean>(false);
    const global_value = ref<string>(props.modelValue || "");

    const onInput = () => emit("input");
    const onBlur = () => emit("blur");

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
      showPopup,
      onInput,
      onBlur,
    };
  },
});
</script>
