<template>
  <div :class="cls" @mouseenter="onMouse" @mousemove="onMouse" @click="handleSelect">
    <div class="rate-left"><slot /></div>
    <div class="rate-right"><slot /></div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, ref } from "vue";

const props = defineProps({
  current: {
    type: Number,
    default: 0,
  },
  index: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits<{
  (e: "mousemove", index: number, isHalf: boolean): void;
  (e: "select", index: number, isHalf: boolean): void;
}>();
const slots = defineSlots();

const { clsBlockName } = useNamespace("rate-item");
const _itemWdith = 22;

const cls = computed(() => {
  return [clsBlockName.value, val.value > 0 ? (val.value === 1 ? "full-active" : "half-active") : ""];
});

const isHalf = ref(false);
const val = computed(() => {
  if (props.current >= props.index + 1) {
    return 1;
  }
  if (props.current < props.index + 1 - 0.5) {
    return 0;
  }
  return 0.5;
});

const onMouse = (e: MouseEvent) => {
  isHalf.value = e.offsetX < _itemWdith / 2;
  emits("mousemove", props.index, isHalf.value);
};

const handleSelect = (e: MouseEvent) => {
  isHalf.value = e.offsetX < _itemWdith / 2;
  emits("select", props.index, isHalf.value);
};
</script>
