<template>
  <div :class="[clsBlockName, `${clsBlockName}-${status}`]">
    <span v-if="dot" :class="`${clsBlockName}-dot`"></span>
    <span
      v-else-if="_innerText"
      :class="`${clsBlockName}-inner`"
      :style="{ top: `${offset[0]}px`, right: `${offset[1]}px` }"
    >
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

const _innerText = computed(() => {
  if (props.text) {
    return props.text;
  }
  return props.count > props.maxCount ? `${props.maxCount}+` : props.count;
});
</script>
