/*
 * @Author: Sam
 * @Date: 2019-12-16 11:06:00
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-12 17:11:50
 */
<template>
  <div :class="buttonDivClass" @click="handleClick">
    <!-- 文字按钮 -->
    <p v-if="type === 'text'" class="btn-text">
      <slot></slot>
    </p>
    <!-- 图标按钮 -->
    <p v-else-if="type === 'icon'" :class="[buttonClass]">
      <i v-if="icon !== ''" :class="icon"></i>
    </p>
    <!-- 非文字按钮 -->
    <button v-else :class="buttonClass" :disabled="disabled || loading">
      <!-- 加载状态 -->
      <span v-if="loading" class="bp-icon-loading">
        <i class="ri-loader-fill"></i>
      </span>
      <!-- 按钮图标 -->
      <i v-if="icon !== ''" :class="['bp-icon', icon]"></i>
      <!-- 按钮文本内容 -->
      <span>
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "bp-button",
  props: {
    // 是否加载
    loading: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否幽灵按钮
    plain: {
      type: Boolean,
      default: false,
    },
    // 按钮图标
    icon: {
      type: String,
      default: "",
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 按钮类型
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          [
            "text",
            "default",
            "primary",
            "success",
            "warning",
            "danger",
            "icon",
          ].indexOf(value) !== -1
        );
      },
    },
    // 按钮尺寸
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      },
    },
    // 宽度是否撑满父级元素
    block: {
      type: Boolean,
      default: false,
    },
    // 是否去除边框
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    // 外层 div 样式
    const buttonDivClass = computed(() => {
      let className = ["bp-button"];

      props.round ? className.push("round") : null; // 圆角样式
      props.block ? className.push("btn-block") : null; // 宽度是否撑满父级元素
      props.noBorder ? className.push("btn-no-border") : null; // 是否去除边框

      return className;
    });

    // 非文字按钮样式
    const buttonClass = computed(() => {
      let className = props.plain
        ? [`btn-${props.type}-plain`]
        : [`btn-${props.type}`]; // 按钮类型
      className.push(`btn-size-${props.size}`); // 按钮尺寸
      if (props.block) className.push("btn-block"); // 宽度是否撑满父级元素

      return className;
    });

    const { handleClick } = useButtonEvent(emit);

    return {
      buttonDivClass,
      buttonClass,
      handleClick,
    };
  },
};

// 按钮事件
function useButtonEvent(emit) {
  // 点击触发
  const handleClick = () => {
    emit("click");
  };

  return {
    handleClick,
  };
}
</script>