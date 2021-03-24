/*
 * @Author: Sam
 * @Date: 2019-12-22 10:31:59
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-13 11:25:58
 */
<template>
  <div class="bp-row" ref="row">
    <slot></slot>
  </div>
</template>

<script>
import { watch, onMounted, watchEffect, getCurrentInstance } from "vue";
export default {
  name: "bp-row",
  props: {
    // 分栏间隔
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },
  setup(props) {
    // 设置 col 间隔
    const setColGutter = () => {
      if (props.gutter === 0) {
        return;
      }

      // 获取 row 下所有 col
      const row = getCurrentInstance().refs.row.children;

      let len = row.length;
      // 首尾元素不做两边 padding 处理
      for (let i = 0; i < len; i++) {
        if (i !== 0) {
          row[i].style.paddingLeft = `${props.gutter}px`;
        }
        if (i !== len - 1) {
          row[i].style.paddingRight = `${props.gutter}px`;
        }
      }
    };

    onMounted(() => {
      setColGutter();
    });

    return {
      setColGutter,
    };
  },
};
</script>