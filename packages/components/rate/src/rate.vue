<template>
  <div :class="cls" @mouseleave="onMouseleave">
    <template v-for="(item, index) in props.count" :key="`rate-${index}`">
      <rate-item :current :index @mousemove="onMousemove" @select="onSelect">
        <slot name="icon" :index>
          <IconStarFill />
        </slot>
      </rate-item>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { RateProps, rateProps } from "./props";
import rateItem from "./components/rate-item.vue";
import { IconStarFill } from "birdpaper-icon";

defineOptions({ name: "Rate" });
const { clsBlockName } = useNamespace("rate");

const model = defineModel({ default: 0 });
const props: RateProps = defineProps(rateProps);

const cls = computed(() => {
  return [
    clsBlockName.value,
    props.disabled && `${clsBlockName.value}-disabled`,
    props.readonly && `${clsBlockName.value}-readonly`,
  ];
});

const current = ref(props.half ? model.value : Math.round(model.value) || 0);

watch(
  () => model.value,
  (val) => {
    current.value = props.half ? val : Math.round(val) || 0;
  }
);

const onMousemove = (index: number, isHalf: boolean) => {
  if (props.disabled || props.readonly) return;
  current.value = index + (props.half ? (isHalf ? 0.5 : 1) : 1);
};

const onSelect = (index: number, isHalf: boolean) => {
  if (props.disabled || props.readonly) return;
  const next = index + (props.half ? (isHalf ? 0.5 : 1) : 1);
  model.value = next;
  current.value = next;
};

const onMouseleave = () => {
  current.value = model.value;
};
</script>
