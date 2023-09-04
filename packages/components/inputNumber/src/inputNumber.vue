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
        <div :class="[isMax ? 'disabled' : '', `${name}-step-item`]" @click="handleStep('up')">
          <i class="ri-arrow-up-s-line"></i>
        </div>
        <div :class="[isMin ? 'disabled' : '', `${name}-step-item`]" @click="handleStep('down')">
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

    /** 数字精度，受 step 和 precision 影响, 取精度最大的一个 */
    const mergePrecision = computed<number | null>(() => {
      if (!props.precision) return null;

      const stepPrecisioin = props.step.toString()?.split(".")[1]?.length || 0;
      return props.precision > stepPrecisioin ? props.precision : stepPrecisioin;
    });
    const isMin = computed(() => Number(_value.value) === props.min);
    const isMax = computed(() => Number(_value.value) === props.max);

    const handleStep = (type: "up" | "down") => {
      if (props.hideButton || !props.step) return;

      inputRef.value.handleFocus();
      var val = Number(_value.value);

      if (type === "up" && !isMax.value) {
        val += props.step;
      }
      if (type === "down" && !isMin.value) {
        val -= props.step;
      }

      _value.value = getValue(val);
      updateValue();
    };

    /**
     * 获取文本框需要的值
     * @param val
     */
    const getValue = (val: number | string): string => {
      if (!val || val === "") return "";

      return mergePrecision.value && mergePrecision.value >= 0
        ? Number(val).toFixed(mergePrecision.value)
        : val.toString();
    };

    const _value = ref<string>(getValue(props.modelValue) || "");

    const handleStatus = () => {
      let value = _value.value;

      if (!isNull(props.min) && Number(value) < props.min) {
        return props.min.toString();
      }

      if (!isNull(props.max) && Number(value) > props.max) {
        return props.max.toString();
      }

      return value.toString();
    };

    const onInput = (value: string) => {
      if (value === "") {
        _value.value = "";
        return updateValue();
      }

      value = value.trim().replace(/。/g, ".");
      if (Number(value) || /^(\.|-)$/.test(value)) {
        _value.value = value;
        return updateValue();
      }

      _value.value = value.replace(/^(\.?|-)$/g, "");
      _value.value = value.replace(/[^\d.]/g, "");
      _value.value = getValue(parseFloat(_value.value));
      return;
    };

    const onBlur = () => {
      _value.value = getValue(handleStatus());
      updateValue();
      emit("blur");
    };

    const updateValue = () => {
      emit("update:modelValue", parseFloat(_value.value) || "");
      emit("input", parseFloat(_value.value) || "");
    };
    updateValue();

    watch(
      () => props.modelValue,
      (value?: number | string) => {
        _value.value = getValue(value || "");
      }
    );

    return {
      name,
      inputRef,
      _value,
      isMax,
      isMin,
      handleStep,
      onInput,
      onBlur,
    };
  },
});
</script>
