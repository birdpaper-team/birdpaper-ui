<template>
  <div :class="cls" ref="rowRef">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, nextTick, onMounted, PropType, ref, VNode, VueElement } from "vue";
import { Align, Justify } from "./types";
import col from "./col.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Row",
  props: {
    /** 栏位间隔 Field spacing */
    gutter: { type: [String, Number], default: "" },
    /** 水平对齐方式 Horizontal alignment */
    justify: { type: String as PropType<Justify>, default: "start" },
    /** 垂直对齐方式 Vertical alignment */
    align: { type: String as PropType<Align>, default: "start" },
  },
  setup(props, { slots }) {
    const rowRef = ref();
    const name = "row";
    const cls = computed(() => {
      return [`bp-${name}`, `bp-justify-${props.justify}`, `bp-align-${props.align}`];
    });

    /**
     * 设置栅格间距
     * @param els
     */
    const setGutter = (els: VNode[]) => {
      const childrenEls = rowRef.value.children;

      els.forEach((item, index) => {
        const isCol = item.type === col;

        if (isCol) {
          const el: VueElement = childrenEls[index];
          index !== 0 && (el.style.paddingLeft = `${props.gutter}px`);
          index !== childrenEls.length - 1 && (el.style.paddingRight = `${props.gutter}px`);
          return;
        }

        if (item.type.toString() === "Symbol(Fragment)") {
          setGutter(item.children as VNode[]);
        }
      });
    };

    onMounted(() => {
      nextTick(() => setGutter(slots.default()));
    });

    return {
      rowRef,
      name,
      cls,
    };
  },
});
</script>
