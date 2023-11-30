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
    <template #suffix v-if="!hideButton && !disabled">
      <div :class="`${name}-step`">
        <div
          :class="[{ disabled: v.disabled }, `${name}-step-item`]"
          @click="handleStep(v.type)"
          v-for="v in [
            { type: 'up', disabled: isMax },
            { type: 'down', disabled: isMin },
          ]"
        >
          <component :is="v.type === 'up' ? IconArrowUpSLine : IconArrowDownSLine" size="14px"></component>
        </div>
      </div>
    </template>
  </bp-input>
</template>

<script lang="ts">
import { InputSize } from "components/input";
import { isNull } from "../../../utils/util";
import { PropType, watch, computed, defineComponent, ref } from "vue";
import { IconArrowDownSLine, IconArrowUpSLine } from "birdpaper-icon";

export default defineComponent({
  name: "InputNumber",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [Number, String] as PropType<number | ""> },
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
    /** 数字变化步长 */
    step: { type: Number, default: 1 },
    /** 最小值 */
    min: { type: Number },
    /** 最大值 */
    max: { type: Number },
  },
  emits: ["update:modelValue", "input", "blur"],
  setup(props, { emit }) {
    const name = "bp-input-number";
    const inputRef = ref();

    /** 数字精度，受 step 和 precision 影响, 取精度最大的一个 */
    const mergePrecision = computed<number | null>(() => {
      const stepPrecisioin = props.step.toString()?.split(".")[1]?.length || 0;

      if (!props.precision) return stepPrecisioin;
      return props.precision > stepPrecisioin ? props.precision : stepPrecisioin;
    });
    const isMin = computed(() => Number(global_value.value) === props.min);
    const isMax = computed(() => Number(global_value.value) === props.max);

    const handleStep = (type: string) => {
      if (props.hideButton || !props.step) return;

      inputRef.value.handleFocus();
      var val = Number(global_value.value);

      if (type === "up" && !isMax.value) {
        val += props.step;
      }
      if (type === "down" && !isMin.value) {
        val -= props.step;
      }

      global_value.value = getValue(val);
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

    const global_value = ref<string>(getValue(props.modelValue) || "");

    const handleStatus = () => {
      let value = global_value.value;

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
        global_value.value = "";
        return updateValue();
      }

      value = value.trim().replace(/。/g, ".");
      if (Number(value) || /^(\.|-)$/.test(value)) {
        global_value.value = value;
        return updateValue();
      }

      global_value.value = value.replace(/^(\.?|-)$/g, "");
      global_value.value = value.replace(/[^\d.]/g, "");
      global_value.value = getValue(parseFloat(global_value.value));
      return;
    };

    const onBlur = () => {
      global_value.value = getValue(handleStatus());
      updateValue();
      emit("blur");
    };

    const updateValue = () => {
      emit("update:modelValue", parseFloat(global_value.value) || "");
      emit("input", parseFloat(global_value.value) || "");
    };
    updateValue();

    watch(
      () => props.modelValue,
      (value?: number | string) => {
        global_value.value = getValue(value || "");
      }
    );

    return {
      name,
      inputRef,
      global_value,
      isMax,
      isMin,
      handleStep,
      onInput,
      onBlur,
      IconArrowDownSLine,
      IconArrowUpSLine,
    };
  },
});
</script>
