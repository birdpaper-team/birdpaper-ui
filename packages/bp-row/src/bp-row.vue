<template>
  <div :class="clazzName" ref="row">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance, computed } from "vue";
export default {
  name: "bp-row",
  props: {
    gutter: { type: [Number, String], default: 0 }, // 分栏间隔
    hideGutter: {
      type: String,
      default: "",
      validator: function (value) {
        return ["", "xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
      },
    }, // 在对应的尺寸下隐藏间隔
    type: {
      type: String,
      default: "",
      validator: function (value) {
        return ["", "flex"].indexOf(value) !== -1;
      },
    }, // 布局方式
    justify: {
      type: String,
      default: "center",
      validator: function (value) {
        return (
          ["start", "end", "center", "space-around", "space-between"].indexOf(
            value
          ) !== -1
        );
      },
    }, // flex下的水平排列方式
    align: {
      type: String,
      default: "middle",
      validator: function (value) {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      },
    }, // flex下的垂直排列方式
  },
  setup(props) {
    // 设置 col 属性
    const setColAttrs = () => {
      // 获取 row 下所有 col
      const row = getCurrentInstance().refs.row.children || [];
      let len = row.length;

      if (len === 0) return;

      for (let i = 0; i < len; i++) {
        // 布局模式
        row[i].classList.add(props.type === "flex" ? "bp-col" : "bp-col");

        // Gutter 处理
        if (props.gutter !== 0 && len > 1) {
          if (i !== 0) row[i].style.paddingLeft = `${props.gutter}px`;
          if (i !== len - 1) row[i].style.paddingRight = `${props.gutter}px`;
        }
      }
    };

    const clazzName = computed(() => {
      const isFlex = props.type === "flex";
      const isHideGutter = props.hideGutter !== "";
      const prefix = isFlex ? "bp-row-flex" : "bp-row";
      const name = [prefix];
      if (isFlex) {
        name.push(`bp-row-flex-justify-${props.justify}`);
        name.push(`bp-row-flex-align-${props.align}`);
      }
      if (isHideGutter) {
        name.push(`bp-row-hide-gutter-${props.hideGutter}`);
      }
      return name;
    });

    onMounted(() => {
      setColAttrs();
    });

    return {
      setColAttrs,
      clazzName,
    };
  },
};
</script>
