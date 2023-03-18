<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts" name="col">
import { computed } from "vue";

const props = defineProps({
  /** 栏位数量 1-24 Number of fields 1-24 */
  span: { type: [String, Number], default: 24 },
  /** 偏移量 Number of offset*/
  offset: { type: [String, Number], default: "" },
});

const name = "col";
const cls = computed(() => {
  let className = [`bp-${name}`];
  Number(props.span) !== 0 ? className.push(`bp-${name}-${props.span}`) : "";
  Number(props.offset) !== 0 ? className.push(`bp-${name}-offset-${props.offset}`) : "";

  return className;
});
</script>
