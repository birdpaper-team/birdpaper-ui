<template>
  <bp-trigger
    v-model:popupVisible="showPopup"
    transition="fade-dropdown"
    :hideTrigger="hideTrigger"
    :disabled="disabled"
    :popup-offset="10"
    position="left-bottom"
    update-at-scroll>
    <bp-input
      ref="inputRef"
      v-model="globalValue"
      :class="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :is-danger="isDanger"
      :clearable="clearable"
      :size="size"
      @input="onInput"
      @blur="onBlur">
      <template #perfix>
        <IconTimeLine />
      </template>
    </bp-input>
    <template #content>
      <div class="bp-time-picker-panel">
        <div class="bp-time-picker-panel-wrapper">
          <time-table :visible="showPopup"></time-table>
        </div>
      </div>
    </template>
  </bp-trigger>
</template>

<script lang="ts">
import { InputSize } from "components/input/src/types";
import { IconTimeLine } from "birdpaper-icon";
import timeTable from "./components/time-table.vue";
import { defineComponent, PropType, provide, ref, watch } from "vue";
import { timeInjectionKey } from "./types";

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
  components: { timeTable, IconTimeLine },
  emits: ["update:modelValue", "input", "blur"],
  setup(props, { emit }) {
    const name = "bp-time-picker";
    const inputRef = ref();

    const showPopup = ref<boolean>(false);
    const globalValue = ref<string>(props.modelValue || "");

    provide(timeInjectionKey, {
      modelValue: props.modelValue,
      onSelect: (v: string, payload: any) => {
        globalValue.value = v;
        emit("update:modelValue", globalValue.value);
        showPopup.value = false;
      },
    });

    const onInput = () => emit("input");
    const onBlur = () => emit("blur");

    watch(
      () => props.modelValue,
      (value?: string) => {
        globalValue.value = value || "";
      }
    );

    return {
      name,
      inputRef,
      globalValue,
      showPopup,
      onInput,
      onBlur,
    };
  },
});
</script>
