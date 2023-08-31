<template>
  <bp-input
    ref="inputRef"
    v-model="inputValue"
    :class="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    @input="onInput"
  >
    <template #suffix>
      <div :class="`${name}-step`">
        <div :class="`${name}-step-item`" @click="handleStep('up')">
          <i class="ri-arrow-up-s-line"></i>
        </div>
        <div :class="`${name}-step-item`" @click="handleStep('down')">
          <i class="ri-arrow-down-s-line"></i>
        </div>
      </div>
    </template>
  </bp-input>
</template>

<script lang="ts">
import { InputSize } from "components/input";
import { PropType, defineComponent, ref } from "vue";

export default defineComponent({
  name: "InputNumber",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: Number },
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
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit }) {
    const name = "bp-input-number";
    const inputRef = ref();
    const inputValue = ref(props.modelValue);

    const handleStep = (type: "up" | "down") => {
      inputRef.value.handleFocus();

      type === "up" ? inputValue.value++ : inputValue.value--;
      onInput(inputValue.value);
    };

    const onInput = (e: number) => {
      emit("update:modelValue", e);
    };

    return {
      name,
      inputRef,
      inputValue,
      handleStep,
      onInput,
    };
  },
});
</script>
