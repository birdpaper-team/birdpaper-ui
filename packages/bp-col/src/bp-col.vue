/*
 * @Author: Sam
 * @Date: 2019-12-22 10:31:59
 * @Last Modified by: Sam
 * @Last Modified time: 2020-01-11 10:49:33
 */
<template>
  <div :class="col_class_name">
    <slot></slot>
  </div>
</template>

<script>
import { isNull } from "../../utils/util";
export default {
  name: "bp-col",
  props: {
    // 栏位数
    span: {
      type: Number,
      default: 0
    },
    // 偏移量
    offset: {
      type: Number,
      default: 0
    },
    // <768px 响应式栅格数或者栅格属性对象
    xs: {
      type: [Object, Number],
      default: () => {}
    },
    // ≥768px 响应式栅格数或者栅格属性对象
    sm: {
      type: [Object, Number],
      default: () => {}
    },
    // ≥992px 响应式栅格数或者栅格属性对象
    md: {
      type: [Object, Number],
      default: () => {}
    },
    // ≥1200px 响应式栅格数或者栅格属性对象
    lg: {
      type: [Object, Number],
      default: () => {}
    },
    // ≥1920px 响应式栅格数或者栅格属性对象
    xl: {
      type: [Object, Number],
      default: () => {}
    }
  },
  computed: {
    // class 样式名
    col_class_name() {
      // 默认样式和前缀
      let prefix = "bp-col";
      let className = [prefix];
      this.span != 0 ? className.push(`${prefix}-${this.span}`) : "";

      // 偏移量
      this.offset != 0 ? className.push(`${prefix}-offset-${this.offset}`) : "";

      let arr = ["xs", "sm", "md", "lg", "xl"];
      let self = this.$props;

      for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        // 传入栏位
        if (typeof self[name] == "number") {
          className.push(`${prefix}-${name}-${self[name]}`);
          continue;
        }
        // 传入栅格属性
        if (!isNull(self[name])) {
          // 栏位
          !isNull(self[name].span)
            ? className.push(`${prefix}-${name}-${self[name].span}`)
            : null;

          // 偏移量
          !isNull(self[name].offset)
            ? className.push(`${prefix}-${name}-offset-${self[name].offset}`)
            : null;
        }
      }

      return className;
    }
  }
};
</script>

<style lang="less">
@import "./bp-col";
</style>