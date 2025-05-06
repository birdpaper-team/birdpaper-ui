<template>
  <div :class="cls">
    <div :class="`${clsBlockName}-content`">
      <component :class="`${clsBlockName}-icon`" :is="icon" v-if="icon" size="16" />
      <slot />
    </div>

    <IconCloseLine v-if="closeable" :class="`${clsBlockName}-close`" size="14" @click="handleClose" />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { TagProps, tagProps } from "./props";
import { computed } from "vue";
import { IconCloseLine } from "birdpaper-icon";

defineOptions({ name: "Tag" });
const { clsBlockName } = useNamespace("tag");

const props: TagProps = defineProps(tagProps);
const emits = defineEmits(["close"]);

const cls = computed(() => {
  return [
    clsBlockName,
    "select-none",
    `${clsBlockName}-${props.status}`,
    props.border && `${clsBlockName}-border`,
    props.closeable && `${clsBlockName}-closeable`,
  ];
});

const handleClose = () => {
  if (!props.closeable) return;
  emits("close");
};
</script>
