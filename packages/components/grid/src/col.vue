<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { computed, defineComponent } from "vue";
import { ColResponsive } from "./types";
import { isNull } from "../../../utils/util";

export default defineComponent({
  name: "Col",
  props: {
    /** 栏位数量 1-24 Number of fields 1-24 */
    span: { type: [String, Number], default: 24 },
    /** 偏移量 Number of offset*/
    offset: { type: [String, Number], default: "" },
    // <768px 响应式栅格数或者栅格属性对象
    xs: { type: [Object, Number] as PropType<ColResponsive> },
    // ≥768px 响应式栅格数或者栅格属性对象
    sm: { type: [Object, Number] as PropType<ColResponsive> },
    // ≥992px 响应式栅格数或者栅格属性对象
    md: { type: [Object, Number] as PropType<ColResponsive> },
    // ≥1200px 响应式栅格数或者栅格属性对象
    lg: { type: [Object, Number] as PropType<ColResponsive> },
    // ≥1920px 响应式栅格数或者栅格属性对象
    xl: { type: [Object, Number] as PropType<ColResponsive> },
  },
  setup(props) {
    const name = "col";
    const cls = computed(() => {
      let className = [`bp-${name}`];
      Number(props.span) !== 0 ? className.push(`bp-${name}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`bp-${name}-offset-${props.offset}`) : "";

      const responsive: string[] = ["xs", "sm", "md", "lg", "xl"];

      for (let i = 0; i < responsive.length; i++) {
        const item = responsive[i];
        if (!props[item]) continue;

        if (typeof props[item] === "number") {
          className.push(`bp-${name}-${item}-${props[item]}`);
          continue;
        }

        if (!isNull(props[item])) {
          props[item].span && className.push(`bp-${name}-${item}-${props[item].span}`);
          props[item].offset && className.push(`bp-${name}-${item}-offset-${props[item].offset}`);
        }
      }

      return className;
    });

    return {
      name,
      cls,
    };
  },
});
</script>
