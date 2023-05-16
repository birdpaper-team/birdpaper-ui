<template>
   <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${name}-inner`" />

    <span :class="`${name}-label`"></span>
  </div>
</template>

<script setup lang="ts" name="Switch">
import { computed } from "vue";

const props = defineProps({
  /** 绑定值 Binding value */
  modelValue: { type: Boolean, default: false },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const name = "bp-switch";
const cls = computed(() => {
  let clsName = [name];
  if (props.disabled) {
    clsName.push(`${name}-disabled`);
  }
  return clsName;
});

const isCheck = computed(() => props.modelValue);

const handleClick = () => {
  emits("update:modelValue", !props.modelValue);
};
</script>
