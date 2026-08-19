<template>
  <bp-trigger
    v-model="isOpen"
    transition="fade"
    :class="clsBlockName"
    :trigger
    :popup-offset="10"
    :position
    :disabled="isEmpty"
    update-at-scroll
    @position-change="onPositionChange"
  >
    <div :class="`${clsBlockName}-inner`">
      <slot></slot>
    </div>

    <template #content>
      <div :class="`${clsBlockName}-content ${clsBlockName}-${props.theme}`" role="tooltip">
        <template v-if="!slots.content">
          {{ content }}
        </template>
        <slot name="content"></slot>
      </div>

      <div
        :class="`${clsBlockName}-triangle ${clsBlockName}-triangle-${props.theme} ${clsBlockName}-triangle-${currentPosition}`"
      ></div>
      <div
        v-if="theme === 'light'"
        :class="`${clsBlockName}-triangle ${clsBlockName}-triangle-second ${clsBlockName}-triangle-second-${currentPosition}`"
      ></div>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { useNamespace } from "@birdpaper-ui/hooks";
import { TooltipProps, tooltipProps } from "./props";
import { computed, ref, useSlots, watch } from "vue";
import type { TriggerPosition } from "@birdpaper-ui/components/trigger/src/types";

defineOptions({ name: "Tooltip" });
const { clsBlockName } = useNamespace("tooltip");

const props: TooltipProps = defineProps(tooltipProps);
const slots = useSlots();

const isOpen = ref<boolean>(false);
const currentPosition = ref<TriggerPosition>(props.position);

const isEmpty = computed(() => !props.content && !slots.content);

const onPositionChange = (payload: { position: TriggerPosition }) => {
  currentPosition.value = payload.position;
};

watch(
  () => props.position,
  (val) => {
    currentPosition.value = val;
  }
);

watch(isEmpty, (empty) => {
  if (empty) isOpen.value = false;
});
</script>
