<template>
  <bp-trigger
    v-model="isOpen"
    transition="fade"
    :class="clsBlockName"
    :trigger
    :popup-offset="10"
    :position
    update-at-scroll
  >
    <div :class="`${clsBlockName}-inner`">
      <slot></slot>
    </div>

    <template #content>
      <div :class="`${clsBlockName}-content ${clsBlockName}-${props.theme}`">
        <template v-if="!slots.content">
          {{ content }}
        </template>
        <slot name="content"></slot>
      </div>

      <div
        :class="`${clsBlockName}-triangle ${clsBlockName}-triangle-${props.theme} ${clsBlockName}-triangle-${props.position}`"
      ></div>
      <div
        v-if="theme === 'light'"
        :class="`${clsBlockName}-triangle ${clsBlockName}-triangle-second ${clsBlockName}-triangle-second-${props.position}`"
      ></div>
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
