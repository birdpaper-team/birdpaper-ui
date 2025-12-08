<template>
  <div ref="wrapperRef" :class="cls">
    <div ref="innerRef" v-if="!props.imageUrl" :class="`${clsBlockName}-inner`">
      <slot />
    </div>

    <bp-image v-if="props.imageUrl" :fit="objectFit" :src="props.imageUrl" :class="`${clsBlockName}-image`">
      <template #loading>
        <slot name="loading" />
      </template>
      <template #error>
        <slot name="error" />
      </template>
    </bp-image>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { AvatarProps, avatarProps } from "./props";
import BpImage from "@birdpaper-ui/components/image/index";
import { isNumber, isString } from "radash";

defineOptions({ name: "Avatar" });
const { clsBlockName } = useNamespace("avatar");

const props: AvatarProps = defineProps(avatarProps);
const cls = computed(() => {
  return [clsBlockName, isString(props.size) && `${clsBlockName}-${props.size}`, `${clsBlockName}-${props.shape}`];
});

const wrapperRef = ref<HTMLElement>();
const innerRef = ref<HTMLElement>();

const sizeValue = ref(isNumber(props.size) ? props.size : null);

/** @description Auto set font size scale. */
const autoSetFontSizeScale = () => {
  if (props.imageUrl) return;

  nextTick(() => {
    if (!innerRef.value || !wrapperRef.value) return;

    const innerWidth = innerRef.value.clientWidth;
    const wrapperWidth = sizeValue.value || wrapperRef.value.offsetWidth;

    const scale = wrapperWidth / (innerWidth + 8);
    if (!wrapperWidth || scale > 1) return;

    wrapperRef.value.style.width = `${wrapperWidth}px`;
    wrapperRef.value.style.height = `${wrapperWidth}px`;
    innerRef.value.style.transform = `scale(${scale}) translateX(-50%)`;
  });
};

const init = () => {
  if (sizeValue.value) {
    wrapperRef.value!.style.width = `${sizeValue.value}px`;
    wrapperRef.value!.style.height = `${sizeValue.value}px`;
  }

  autoSetFontSizeScale();
};

watch(
  () => props.size,
  () => init()
);

onMounted(() => init());
</script>
