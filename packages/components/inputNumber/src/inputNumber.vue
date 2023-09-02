<template>
  <bp-input
    ref="inputRef"
    :modelValue="_value"
    :class="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :is-danger="isDanger"
    @input="onInput"
    @blur="onBlur"
  >
    <template #suffix v-if="!hideButton">
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
import { isNull } from "../../../utils/util";
import { nextTick, watch } from "vue";
import { PropType, defineComponent, ref } from "vue";
import { computed } from "vue";

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
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    /** 是否隐藏按钮 */
    hideButton: { type: Boolean, default: false },
    /** 数字精度 */
    precision: { type: Number },
    /** 数字变化跨度 */
    step: { type: Number, default: 1 },
    /** 最小值 */
    min: { type: Number },
    /** 最大值 */
    max: { type: Number },
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit }) {
    const name = "bp-input-number";
    const inputRef = ref();
    const _value = ref<string>(props.modelValue + "");

    const mergePrecision = computed(() => {
      return props.precision;
    });

    const handleStep = (type: "up" | "down") => {
      if (props.hideButton) return;

      inputRef.value.handleFocus();
      var val = Number(_value.value);
      type === "up" ? (val += props.step) : (val -= props.step);

      _value.value = val.toFixed(mergePrecision.value);

      updateValue();
    };

    const limitNumber = (value: string) => {
      value = value.trim().replace(/。/g, ".");

      if (Number(value) || /^(\.|-)$/.test(value)) {
        updateValue();
      }
    };

    const handleStatus = () => {
      let value = _value.value;

      value = Number(value).toFixed(mergePrecision.value);

      if (!isNull(props.min) && Number(value) < props.min) {
        return props.min + "";
      }

      if (!isNull(props.max) && Number(value) > props.max) {
        return props.max + "";
      }
      return value + "";
    };

    const onInput = (value: string) => {
      value = value.trim().replace(/。/g, ".");

      if (Number(value) || /^(\.|-)$/.test(value)) {
        _value.value = value;
        updateValue();
      } else {
        nextTick(() => {
          _value.value = value.replace(/^(\.|-)$/g, "");
          _value.value = value.replace(/-+[^\d.]/g, "");
          _value.value = props.modelValue + "";
        });
      }
    };

    const onBlur = () => {
      _value.value = handleStatus();
      updateValue();
      emit("blur");
    };

    const updateValue = () => {
      emit("update:modelValue", _value.value);
      emit("input", _value.value);
    };

    watch(
      () => props.modelValue,
      (value: number | undefined) => {
        _value.value = value + "";
      }
    );

    return {
      name,
      inputRef,
      _value,
      handleStep,
      limitNumber,
      onInput,
      onBlur,
    };
  },
});
</script>
