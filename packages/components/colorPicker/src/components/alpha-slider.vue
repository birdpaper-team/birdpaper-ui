<template>
  <div class="alpha-slider-bg">
    <div
      ref="sliderRef"
      :style="`background: linear-gradient(to right, rgba(0, 0, 0, 0), ${pointColor});`"
      class="alpha-slider"
      @mousedown="startDrag"
    >
      <div class="alpha-pointer" :style="{ left: pointerX + 'px', background: pointColor }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { getSliderPosition } from "../useColor";
import { useEventListener } from "@vueuse/core";

const model = defineModel<number>({ default: 0 });
const props = defineProps({
  pointColor: {
    type: String,
    default: "#17171a",
  },
});

const sliderRef = ref();
const pointerX = ref(163);
let stopMouseMove: (() => void) | null = null;

const updatePosition = (ev: MouseEvent) => {
  const { x, v } = getSliderPosition(ev, sliderRef.value, 9);
  pointerX.value = x;
  model.value = parseFloat(v.toFixed(2));
};

const removeListener = () => {
  stopMouseMove?.();
  stopMouseMove = null;
};

const onMouseMove = (ev: MouseEvent) => {
  ev.preventDefault();
  ev.buttons > 0 ? updatePosition(ev) : removeListener();
};

const startDrag = (e: MouseEvent) => {
  updatePosition(e);
  removeListener();
  stopMouseMove = useEventListener(window, "mousemove", onMouseMove);
};

onBeforeUnmount(() => {
  removeListener();
});

const setPosition = (a: number) => {
  if (!sliderRef.value) return;

  const rect = sliderRef.value.getBoundingClientRect();
  const left = ((a * 100) / 100) * rect.width - 9;
  pointerX.value = left;
};

defineExpose({
  setPosition,
});
</script>
