/*
 * @Author: Sam
 * @Date: 2019-12-16 11:06:00
 * @Last Modified by: Sam
 * @Last Modified time: 2020-03-19 17:04:42
 */
<template>
  <div :class="button_div_class">
    <!-- 文字按钮 -->
    <span v-if="type=='text'" class="btn-text" @click="$emit('click')">
      <slot></slot>
    </span>
    <!-- 非文字按钮 -->
    <button v-else :class="button_class" :disabled="disabled" @click="$emit('click')">
      <span v-if="loading" class="bp-icon-loading">
        <i class="ri-loader-5-fill"></i>
      </span>
      <slot v-if="!loading"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "bp-button",
  props: {
    // 是否加载
    loading: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否幽灵按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false
    },
    // 按钮类型
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return (
          [
            "text",
            "default",
            "primary",
            "success",
            "warning",
            "danger"
          ].indexOf(value) !== -1
        );
      }
    },
    // 按钮尺寸
    size: {
      type: String,
      default: "normal",
      validator: function(value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      }
    },
    // 宽度是否撑满父级元素
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 外层 div 样式
    button_div_class() {
      let className = ["bp-button"];
      // 圆角样式
      this.round ? className.push("round") : null;
      this.full ? className.push("btn-full") : null; // 宽度是否撑满父级元素
      return className;
    },
    // 非文字按钮样式
    button_class() {
      let className = this.plain
        ? [`btn-${this.type}-plain`]
        : [`btn-${this.type}`]; // 按钮类型
      className.push(`btn-size-${this.size}`); // 按钮尺寸
      this.full ? className.push("btn-full") : null; // 宽度是否撑满父级元素

      return className;
    }
  }
};
</script>

<style lang="less">
@import "./bp-button";
</style>