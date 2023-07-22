<template>
  <div :class="[name, disabled ? `${name}-disabled` : '']" @click="handleInput">
    <input type="radio" :class="`${name}-inner`" />

    <span :class="[`${name}-radio`, isCheck ? `${name}-check` : '']"></span>
    <span :class="`${name}-label`">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";

export default defineComponent({
  name: "Radio",
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number, Boolean], default: false },
    /** 选项的值 */
    value: { type: [String, Number, Boolean], default: false },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const name = "bp-radio";

    const handleInput = () => {
      if (props.disabled) return;

      emit("update:modelValue", props.value);
      emit("change", props.value);
    };

    const isCheck = computed(() => props.modelValue === props.value);

    return {
      name,
      handleInput,
      isCheck,
    };
  },
});
</script>
