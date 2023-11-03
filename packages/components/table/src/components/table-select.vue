<template>
  <span class="bp-table-td-content">
    <component :is="selectionType[type]" v-model="selectValue" :value="value" @change="onSelectChange"></component>
  </span>
</template>

<script lang="ts">
import { watch } from "vue";
import { PropType, defineComponent, ref } from "vue";
import bpRadio from "../../../radio/index";
import bpCheckbox from "../../../checkbox/index";
import { SelectedValue } from "../types";

export default defineComponent({
  name: "TableSelect",
  props: {
    /** 已选择数据绑定值 */
    modelValue: { type: Array as PropType<SelectedValue>, default: () => [] },
    /** 选择器类型 */
    type: { type: String, default: "radio" },
    /** 数据记录 */
    record: { type: Object },
    /** 数据 key 值 */
    value: { type: [String, Number] },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const selectionType = {
      radio: bpRadio,
      checkbox: bpCheckbox,
    };

    const selectValue = ref<SelectedValue>([]);

    const onSelectChange = () => {
      emit("update:modelValue", selectValue.value);
      setTimeout(() => {
        emit("change", props.record);
      }, 20);
    };

    watch(
      () => props.modelValue,
      (v: SelectedValue) => {
        selectValue.value = v;
      },
      { immediate: true }
    );

    return {
      selectValue,
      onSelectChange,
      selectionType,
    };
  },
});
</script>
