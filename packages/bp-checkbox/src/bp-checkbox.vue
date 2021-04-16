/*
 * @Author: Sam
 * @Date: 2020-05-07 14:51:55
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-16 09:59:03
 */
<template>
  <div :class="className" @click="handleClick">
    <!-- 多选框内容 -->
    <div
      :class="[
        innerClassName,
        { checked: modelValue || value, indeterminate: indeterminate },
      ]"
    >
      <div class="bp-checkbox-inner"></div>
    </div>
    <!-- Checkbox -->
    <input ref="checkbox" type="checkbox" :name="name" v-model="inputValue" />
    <!-- 选项标签文本 -->
    <div class="bp-checkbox-inner-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "bp-checkbox",
  props: {
    // 多选框值
    modelValue: { type: Boolean, default: false },
    // name
    name: { type: String, default: "" },
    // 是否禁用
    disabled: { type: Boolean, default: false },
    customClick: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    value: { type: Boolean, default: false },
  },
  emits: ["update:modelValue", "click"],
  setup(props, { emit }) {
    const inputValue = ref("");
    const className = computed(() => {
      let name = ["bp-checkbox"];
      if (props.disabled) {
        name.push("bp-checkbox-disabled");
      }
      return name;
    });

    const innerClassName = computed(() => {
      let name = props.disabled
        ? ["bp-checkbox-inner-box-disabled"]
        : ["bp-checkbox-inner-box"];

      return name;
    });

    const handleClick = () => {
      if (props.disabled) {
        return;
      }
      if (props.customClick) {
        emit("click");
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };

    return {
      className,
      innerClassName,
      handleClick,
      inputValue,
    };
  },
};
</script>