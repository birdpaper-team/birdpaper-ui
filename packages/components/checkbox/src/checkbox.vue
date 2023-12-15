<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${name}-inner`" />

    <span :class="[`${name}-checkbox`, isCheck ? `${name}-check` : '']">
      <IconCheckLine v-if="isCheck && !indeterminate" />
      <IconSubtractLine v-if="isCheck && indeterminate" />
    </span>
    <span :class="`${name}-label`">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from "vue";
import { CheckboxValue } from "./type";
import { IconCheckLine, IconSubtractLine } from "birdpaper-icon";

export default defineComponent({
  name: "Checkbox",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [Boolean, Array] as PropType<CheckboxValue>, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 复选框的值 */
    value: { type: [String, Number] },
    /** 是否为不确定状态 */
    indeterminate: { type: Boolean, default: false },
  },
  components: { IconCheckLine, IconSubtractLine },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const name = "bp-checkbox";
    const cls = computed(() => {
      let clsName = [name];
      if (props.disabled) {
        clsName.push(`${name}-disabled`);
      }
      return clsName;
    });

    const isCheck = computed(() => {
      if (Array.isArray(props.modelValue)) {
        if (!props.value) return false;

        return props.modelValue.includes(props.value);
      }
      return props.modelValue;
    });

    const handleClick = () => {
      if (props.disabled) return;

      if (Array.isArray(props.modelValue)) {
        if (!props.value) return false;

        let arr = JSON.parse(JSON.stringify(props.modelValue));

        const index = arr.indexOf(props.value);
        index === -1 ? arr.push(props.value) : arr.splice(index, 1);

        emit("update:modelValue", arr);
        return emit("change", arr);
      }
      emit("update:modelValue", !props.modelValue);
      return emit("change", !props.modelValue);
    };
    return {
      cls,
      name,
      isCheck,
      handleClick,
    };
  },
});
</script>
