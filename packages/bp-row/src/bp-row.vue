/*
 * @Author: Sam
 * @Date: 2019-12-22 10:31:59
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-20 16:14:05
 */
<template>
  <div class="bp-row" ref="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bp-row",
  props: {
    // 分栏间隔
    gutter: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.setColGutter();
  },
  methods: {
    // 设置 col 间隔
    setColGutter() {
      if (this.gutter == 0) {
        return;
      }
      let children = this.$refs.row.children; // 获取 row 下所有 col。
      let len = children.length;
      // 首尾元素不做两边 padding 处理
      for (let i = 0; i < len; i++) {
        if (i != 0) {
          children[i].style.paddingLeft = `${this.gutter}px`;
        }
        if (i != len - 1) {
          children[i].style.paddingRight = `${this.gutter}px`;
        }
      }
    }
  },
  watch: {
    gutter() {
      this.setColGutter();
    }
  }
};
</script>

<style lang="less">
@import "./bp-row";
@import "./display";
</style>