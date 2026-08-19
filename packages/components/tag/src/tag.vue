<template>
  <div :class="cls">
    <div :class="`${clsBlockName}-content`">
      <component :class="`${clsBlockName}-icon`" :is="icon" v-if="icon" size="16" />
      <slot />
    </div>

    <button
      v-if="closeable"
      type="button"
      :class="`${clsBlockName}-close`"
      aria-label="Close"
      @click="handleClose"
    >
      <IconCloseLine size="14" />
    </button>
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
    clsBlockName.value,
    "select-none",
    `${clsBlockName.value}-${props.status}`,
    props.border && `${clsBlockName.value}-border`,
    props.closeable && `${clsBlockName.value}-closeable`,
  ];
});

const handleClose = () => {
  if (!props.closeable) return;
  emits("close");
};
</script>
