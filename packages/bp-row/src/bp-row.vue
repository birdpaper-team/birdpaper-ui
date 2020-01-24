/*
 * @Author: Sam
 * @Date: 2019-12-22 10:31:59
 * @Last Modified by: Sam
 * @Last Modified time: 2019-12-26 14:06:51
 */
<template>
  <div class="bp-row" ref="row" :style="inline_style">
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
  data() {
    return {
      row_gutter: "", // 间隔
      inline_style: "" // row 行内样式
    };
  },
  mounted() {
    this.setGutter();
  },
  methods: {
    // 设置 row 间隔
    setGutter() {
      if (this.gutter == 0) {
        return;
      }
      // this.inline_style = `margin-left: ${this.gutter}px; margin-right: ${this.gutter}px;`;
      this.setColGutter();
    },
    // 设置 col 间隔
    setColGutter() {
      if (this.gutter == 0) {
        return;
      }
      let children = this.$refs.row.children; // 获取 row 下所有 col。
      for (let i = 0; i < children.length; i++) {
        children[i].style.paddingLeft = `${this.gutter}px`;
        children[i].style.paddingRight = `${this.gutter}px`;
      }
    }
  },
  watch: {
    gutter() {
      this.setGutter();
    }
  }
};
</script>

<style lang="less">
@import "./bp-row";
@import "./display";
</style>