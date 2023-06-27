<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${name}-inner`" />

    <span :class="[`${name}-slider`, isCheck ? `${name}-check` : '']"></span>
  </div>
</template>

<script setup lang="ts" name="Switch">
import { computed } from "vue";

const props = defineProps({
  /** 绑定值 Binding value */
  modelValue: { type: Boolean, default: false },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 选中时的值 */
  checkValue: { type: [Boolean, Number, String], default: true },
  /** 未选中时的值 */
  uncheckValue: { type: [Boolean, Number, String], default: false },
});
const emits = defineEmits<{
  "update:modelValue": [value: boolean | number | string];
}>();

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
  emits("update:modelValue", isCheck.value ? props.uncheckValue : props.checkValue);
};
</script>
