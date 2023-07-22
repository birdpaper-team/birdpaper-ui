<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${name}-inner`" />

    <span :class="[`${name}-slider`, isCheck ? `${name}-check` : '']"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";

export default defineComponent({
  name: "Switch",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: Boolean, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 选中时的值 */
    checkValue: { type: [Boolean, Number, String], default: true },
    /** 未选中时的值 */
    uncheckValue: { type: [Boolean, Number, String], default: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const name = "bp-switch";
    const cls = computed(() => {
      let clsName = [name];
      if (props.disabled) {
        clsName.push(`${name}-disabled`);
      }
      return clsName;
    });

    const isCheck = computed(() => props.modelValue === props.checkValue);

    const handleClick = () => {
      emit("update:modelValue", isCheck.value ? props.uncheckValue : props.checkValue);
    };

    return {
      name,
      cls,
      isCheck,
      handleClick,
    };
  },
});
</script>
