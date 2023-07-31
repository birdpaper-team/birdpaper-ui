<template>
  <div :class="name">
    <template v-for="v in optionList">
      <bp-radio v-model="val" :disabled="disabled" :value="v.value" @change="updateValue">{{ v.label }}</bp-radio>
    </template>
  </div>
</template>

<script lang="ts" name="RadioGroup">
import { PropType, ref, watch } from "vue";
import bpRadio from "./radio.vue";
import { RadioGroupValue } from "./type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioGroup",
  components: { bpRadio },
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number] as PropType<RadioGroupValue> },
    /** 选项列表 */
    optionList: { type: Array as PropType<{ label: string; value: RadioGroupValue }[]>, default: () => [] },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const name = "bp-radio-group";

    const val = ref<RadioGroupValue>(props.modelValue ?? "");

    const updateValue = (val: RadioGroupValue) => {
      emit("update:modelValue", val);
    };

    watch(
      () => props.modelValue,
      () => (val.value = props.modelValue)
    );

    return {
      name,
      val,
      updateValue,
    };
  },
});
</script>
