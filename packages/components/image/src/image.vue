<template>
  <div :class="cls" ref="imageRef" :style="containerStyle">
    <img
      v-if="shouldRenderImg"
      v-show="!isError && !showLoading"
      :src="imgSrc"
      :class="imgCls"
      :style="imageStyle"
      v-bind="imgAttrs"
      @load="handleLoad"
      @error="handleError"
    />

    <div v-if="showLoading" :class="[`${clsBlockName}-loading`]">
      <slot name="loading">
        <div :class="[`${clsBlockName}-loading-icon`]">
          <IconImage2Line size="20" />
        </div>
      </slot>
    </div>

    <div v-if="isError" :class="[`${clsBlockName}-error`]">
      <slot name="error">
        <div :class="[`${clsBlockName}-error-icon`]">
          <IconErrorWarningLine size="20" />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick, useAttrs } from "vue";
import { imageProps, ImageProps } from "./props";
import { IconImage2Line, IconErrorWarningLine } from "birdpaper-icon";
import type { ImageLoadEffect } from "./types";

defineOptions({ name: "Image", inheritAttrs: false });
const { clsBlockName } = useNamespace("image");

const props: ImageProps = defineProps(imageProps);
const emits = defineEmits(["load", "error"]);
const attrs = useAttrs();

const loading = ref(true);
const isError = ref(false);
const isInView = ref(!props.lazy);
const imageRef = ref<HTMLElement | null>(null);
const fallbackApplied = ref(false);
const hasLoaded = ref(false);
let observer: IntersectionObserver | null = null;

const containerStyle = computed(() => {
  const style: Record<string, string> = {};
  style.width = props.width || "100%";

  if (props.height) {
    style.height = props.height;
  }

  return style;
});

const imageStyle = computed(() => {
  const style: Record<string, string | number> = {
    objectFit: props.fit,
    width: "100%",
  };

  if (props.height) {
    style.height = "100%";
  }

  return style;
});

const imgAttrs = computed(() => ({
  ...attrs,
  alt: props.alt,
  title: props.title,
}));

const imgSrc = computed(() => {
  if (props.lazy && !isInView.value) {
    return props.placeholder || "";
  }
  return props.src;
});

const shouldRenderImg = computed(() => {
  if (!props.lazy) return true;
  if (isInView.value) return true;
  return !!props.placeholder;
});

const showLoading = computed(() => {
  if (props.lazy && !isInView.value) return false;
  return loading.value;
});

const cls = computed(() => {
  return [clsBlockName.value];
});

const isLoaded = computed(() => hasLoaded.value && !isError.value);
const imgCls = computed(() => [
  `${clsBlockName.value}-img`,
  `is-effect-${props.loadEffect as ImageLoadEffect}`,
  { "is-loaded": isLoaded.value },
]);

const handleLoad = (event: Event) => {
  loading.value = false;
  isError.value = false;
  fallbackApplied.value = false;
  if (props.loadEffect === "none") {
    hasLoaded.value = true;
  } else {
    requestAnimationFrame(() => {
      hasLoaded.value = true;
    });
  }
  emits("load", event);
};

const handleError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  if (props.fallback && !fallbackApplied.value && target?.src !== props.fallback) {
    fallbackApplied.value = true;
    loading.value = true;
    isError.value = false;
    target.src = props.fallback;
    return;
  }
  loading.value = false;
  isError.value = true;
  hasLoaded.value = false;
  emits("error", event);
};

const setupLazyLoad = () => {
  if (!props.lazy) return;
  observer?.disconnect();
  observer = null;

  if (typeof window === "undefined" || !window.IntersectionObserver) {
    isInView.value = true;
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true;
          observer?.unobserve(entry.target);
          observer?.disconnect();
        }
      });
    },
    {
      root: null,
      rootMargin: "50px",
      threshold: 0,
    }
  );

  if (imageRef.value) {
    observer.observe(imageRef.value);
  }
};

const resetImage = () => {
  loading.value = true;
  isError.value = false;
  fallbackApplied.value = false;
  hasLoaded.value = false;
};

watch(
  () => props.src,
  () => {
    if (props.lazy) {
      isInView.value = false;
      resetImage();
      nextTick(() => setupLazyLoad());
      return;
    }
    resetImage();
  }
);

watch(
  () => props.lazy,
  (val) => {
    if (!val) {
      observer?.disconnect();
      observer = null;
      isInView.value = true;
      return;
    }
    isInView.value = false;
    nextTick(() => setupLazyLoad());
  }
);

watch(isInView, (val) => {
  if (val) {
    resetImage();
  }
});

onMounted(() => {
  nextTick(() => {
    setupLazyLoad();
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>
