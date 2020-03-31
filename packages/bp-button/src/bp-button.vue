/*
 * @Author: Sam
 * @Date: 2019-12-16 11:06:00
 * @Last Modified by: Sam
 * @Last Modified time: 2020-03-31 10:34:51
 */
<template>
  <div :class="buttonDivClass">
    <!-- 文字按钮 -->
    <span v-if="type=='text'" class="btn-text" @click="handelClick">
      <slot></slot>
    </span>
    <!-- 非文字按钮 -->
    <button v-else :class="buttonClass" :disabled="disabled" @click="handelClick">
      <!-- 加载状态 -->
      <span v-if="loading" class="bp-icon-loading">
        <i class="ri-loader-5-line"></i>
      </span>
      <slot></slot>
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
    buttonDivClass() {
      let className = ["bp-button"];
      // 圆角样式
      this.round ? className.push("round") : null;
      this.full ? className.push("btn-full") : null; // 宽度是否撑满父级元素
      return className;
    },
    // 非文字按钮样式
    buttonClass() {
      let className = this.plain
        ? [`btn-${this.type}-plain`]
        : [`btn-${this.type}`]; // 按钮类型
      className.push(`btn-size-${this.size}`); // 按钮尺寸
      this.full ? className.push("btn-full") : null; // 宽度是否撑满父级元素

      return className;
    }
  },
  methods:{
    // 点击事件触发
    handelClick(){
      this.$emit('click');
    }
  }
};
</script>

<style lang="less">
@import "./bp-button";
</style>