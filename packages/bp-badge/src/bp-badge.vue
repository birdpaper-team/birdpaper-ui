/*
 * @Author: Sam
 * @Date: 2020-07-14 10:06:27
 * @Last Modified by: Sam
 * @Last Modified time: 2020-07-27 09:32:51
 */
<template>
  <div :class="clazzName">
    <slot></slot>
    <!-- 圆点标记 -->
    <transition name="bp-fade-in">
      <sup class="bp-badge-dot" v-if="isDot && !hidden"></sup>
    </transition>
    <!-- 显示具体字符标记 -->
    <transition name="bp-fade-in">
      <sup class="bp-badge-value" v-if="!isDot && !hidden" v-text="badgeNum"></sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: "bp-badge",
  props: {
    // 显示值
    value: {
      type: [String, Number],
      default: "",
    },
    // 最大值
    max: {
      type: Number,
    },
    // 是否渲染成圆点
    isDot: {
      type: Boolean,
      default: false,
    },
    // 隐藏标记
    hidden: {
      type: Boolean,
      default: false,
    },
    // 类型
    type: {
      type: String,
      default: "danger",
      validator: function (value) {
        return (
          ["primary", "success", "warning", "danger"].indexOf(value) !== -1
        );
      },
    },
  },
  computed: {
    // 根据 max 显示数量
    badgeNum() {
      if (this.max && this.value > this.max) {
        return `${this.max}+`;
      }
      return this.value;
    },
    // Badge 组件类名
    clazzName() {
      let name = ["bp-badge"];
      name.push(`bp-badge-${this.type}`);
      return name;
    },
  },
};
</script>
<style lang="less">
@import "./bp-badge.less";
</style>