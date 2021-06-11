/*
 * @Author: Sam
 * @Date: 2020-05-07 14:51:55
 * @Last Modified by: Sam
 * @Last Modified time: 2021-06-04 13:53:23
 */
<template>
  <div :class="className" @click="onClick">
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
    modelValue: { type: Boolean, default: false }, // 绑定值
    name: { type: String, default: "" }, // name
    disabled: { type: Boolean, default: false }, // 是否禁用
    customClick: { type: Boolean, default: false }, // 是否使用自定义点击，为true不会触发绑定值更新
    indeterminate: { type: Boolean, default: false }, // 样式上控制不确定状态
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

    const onClick = () => {
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
      onClick,
      inputValue,
    };
  },
};
</script>