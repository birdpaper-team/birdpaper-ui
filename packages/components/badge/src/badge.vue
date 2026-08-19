<template>
  <div :class="[clsBlockName, `${clsBlockName}-${status}`]">
    <span v-if="dot" :class="`${clsBlockName}-dot`" :style="offsetStyle"></span>
    <span v-else-if="showBadge" :class="`${clsBlockName}-inner`" :style="offsetStyle">
      {{ _innerText }}
    </span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { BadgeProps, badgeProps } from "./props";
import { computed } from "vue";

defineOptions({ name: "Badge" });
const { clsBlockName } = useNamespace("badge");

const props: BadgeProps = defineProps(badgeProps);

const showBadge = computed(() => {
  if (props.text) return true;
  return props.count > 0;
});

const _innerText = computed(() => {
  if (props.text) {
    return props.text;
  }
  return props.count > props.maxCount ? `${props.maxCount}+` : props.count;
});

/** offset is [top, right] — matches docs and previous behavior */
const offsetStyle = computed(() => ({
  top: `${props.offset[0]}px`,
  right: `${props.offset[1]}px`,
}));
</script>
