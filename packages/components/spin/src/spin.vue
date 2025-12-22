<template>
  <div :class="[cls, { 'spin-has-content': slots.default?.({}) }]">
    <Spinner v-if="!slots.default?.({})" :icon="spinIcon" :description="description" />

    <Transition name="fade">
      <div :class="`${clsBlockName}-mask`" v-if="spinning">
        <Spinner :icon="spinIcon" :description="description" />
      </div>
    </Transition>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots, Transition } from "vue";
import type { Component } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line } from "birdpaper-icon";
import { SpinProps, spinProps } from "./props";
import Spinner from "./components/spinner.vue";

defineOptions({ name: "Spin" });
const { clsBlockName } = useNamespace("spin");
const cls = computed(() => [clsBlockName, props.spinning && `${clsBlockName}-spinning`]);

const props: SpinProps = defineProps(spinProps);
const slots = useSlots();

const spinIcons = [IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line];
const spinIcon = computed<Component>(() => {
  if (typeof props.spinIcon === "number") return spinIcons[props.spinIcon - 1];
  return props.spinIcon;
});
</script>
