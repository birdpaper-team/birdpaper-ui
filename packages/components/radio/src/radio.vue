<template>
  <div :class="[name, disabled ? `${name}-disabled` : '']" @click="handleInput">
    <input type="radio" :class="`${name}-inner`" />

    <span :class="[`${name}-radio`, isCheck ? `${name}-check` : '']"></span>
    <span :class="`${name}-label`">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts" name="Radio">
import { computed } from "vue";

const props = defineProps({
  /** 单选框绑定值 */
  modelValue: { type: [String, Number, Boolean], default: false },
  /** 选项的值 */
  value: { type: [String, Number, Boolean], default: false },
  /** 是否禁用 */
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits<{
  "update:modelValue": [value: string | number | boolean];
  change: [value: string | number | boolean];
}>();

const name = "bp-radio";

const handleInput = () => {
  if (props.disabled) return;

  emits("update:modelValue", props.value);
  emits("change", props.value);
};

const isCheck = computed(() => props.modelValue === props.value);
</script>
