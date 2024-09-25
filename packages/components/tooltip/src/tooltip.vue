<template>
  <bp-trigger
    v-model="isOpen"
    transition="fade"
    :class="clsBlockName"
    :trigger
    :popup-offset="10"
    position="top"
    update-at-scroll
  >
    <div :class="`${clsBlockName}-inner`">
      <slot></slot>
    </div>

    <template #content>
      <div :class="`${clsBlockName}-content`">
        <template v-if="!slots.content">
          {{ content }}
        </template>
        <slot name="content"></slot>
      </div>

      <div :class="`${clsBlockName}-triangle`"></div>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { useNamespace } from "@birdpaper-ui/hooks";
import { TooltipProps, tooltipProps } from "./props";
import { ref, useSlots } from "vue";

defineOptions({ name: "Tooltip" });
const { clsBlockName } = useNamespace("tooltip");

const props: TooltipProps = defineProps(tooltipProps);
const slots = useSlots();

const isOpen = ref<boolean>(false);
</script>
