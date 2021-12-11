<template>
  <div :class="colClassName">
    <slot></slot>
  </div>
</template>

<script>
import { isNull } from "../../utils/util";
import { computed } from "vue";
export default {
  name: "bp-col",
  props: {
    // 栏位数
    span: { type: [Number, String], default: 0 },
    // 偏移量
    offset: { type: [Number, String], default: 0 },
    // <768px 响应式栅格数或者栅格属性对象
    xs: { type: [Object, Number], default: () => {} },
    // ≥768px 响应式栅格数或者栅格属性对象
    sm: { type: [Object, Number], default: () => {} },
    // ≥992px 响应式栅格数或者栅格属性对象
    md: { type: [Object, Number], default: () => {} },
    // ≥1200px 响应式栅格数或者栅格属性对象
    lg: { type: [Object, Number], default: () => {} },
    // ≥1920px 响应式栅格数或者栅格属性对象
    xl: { type: [Object, Number], default: () => {} },
  },
  setup(props) {
    let colClassName = computed(() => {
      // 默认样式和前缀
      let prefix = "bp-col";
      let className = [];
      Number(props.span) !== 0 ? className.push(`${prefix}-${props.span}`) : "";

      // 偏移量
      Number(props.offset) !== 0
        ? className.push(`${prefix}-offset-${props.offset}`)
        : "";

      // 自适应尺寸
      let arr = ["xs", "sm", "md", "lg", "xl"];

      for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        // 传入栏位
        if (typeof props[name] === "number") {
          className.push(`${prefix}-${name}-${props[name]}`);
          continue;
        }
        // 传入栅格属性
        if (!isNull(props[name])) {
          // 栏位
          !isNull(props[name].span)
            ? className.push(`${prefix}-${name}-${props[name].span}`)
            : null;

          // 偏移量
          !isNull(props[name].offset)
            ? className.push(`${prefix}-${name}-offset-${props[name].offset}`)
            : null;
        }
      }
      return className;
    });

    return {
      colClassName,
    };
  },
};
</script>