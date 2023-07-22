<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Col",
  props: {
    /** 栏位数量 1-24 Number of fields 1-24 */
    span: { type: [String, Number], default: 24 },
    /** 偏移量 Number of offset*/
    offset: { type: [String, Number], default: "" },
  },
  setup(props) {
    const name = "col";
    const cls = computed(() => {
      let className = [`bp-${name}`];
      Number(props.span) !== 0 ? className.push(`bp-${name}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`bp-${name}-offset-${props.offset}`) : "";

      return className;
    });

    return {
      name,
      cls,
    };
  },
});
</script>
