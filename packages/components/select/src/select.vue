<template>
  <div :class="name">
    <bp-input v-model="inpVal" readonly :placeholder="placeholder"></bp-input>
    <span :class="`${name}-down-inner`"><i class="ri-arrow-down-s-line"></i> </span>
  </div>
</template>

<script setup lang="ts" name="Select">
import { ref } from "vue";

const props = defineProps({
  /** 绑定值 Binding value */
  modelValue: { type: String, default: "" },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 占位提示文字 The placeholder text */
  placeholder: { type: String, default: "" },
  /** 是否允许清空 Clearable or not */
  clearable: { type: Boolean, default: false },
});

const name = "bp-select";
const inpVal = ref<string | number>(props.modelValue || '');
const isFocus = ref<boolean>(false);
</script>
