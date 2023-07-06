<template>
  <div :class="name">
    <template v-for="v in optionList">
      <bp-radio v-model="val" :value="v.value" @change="updateValue">{{ v.label }}</bp-radio>
    </template>
  </div>
</template>

<script setup lang="ts" name="RadioGroup">
import { PropType, ref, watch } from "vue";
import bpRadio from "./radio.vue";
import { RadioGroupValue } from "./type";

const props = defineProps({
  /** 单选框绑定值 */
  modelValue: { type: [String, Number] as PropType<RadioGroupValue> },
  /** 选项列表 */
  optionList: { type: Array as PropType<{ label: string; value: RadioGroupValue }[]>, default: () => [] },
  /** 是否禁用 */
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits<{
  "update:modelValue": [val: RadioGroupValue];
}>();
const name = "bp-radio-group";

const val = ref<RadioGroupValue>(props.modelValue ?? "");

const updateValue = (val: RadioGroupValue) => {
  emits("update:modelValue", val);
};

watch(
  () => props.modelValue,
  () => (val.value = props.modelValue)
);
</script>
