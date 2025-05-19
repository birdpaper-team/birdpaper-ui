<template>
  <div :class="cls" ref="imageRef" :style="containerStyle">
    <img v-show="!isError && !loading" :src="imgSrc" :alt :title :style="imageStyle" @load="handleLoad" @error="handleError" />

    <div v-if="loading" :class="[`${clsBlockName}-loading`]">
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
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { imageProps, ImageProps } from "./props";
import { IconImage2Line, IconErrorWarningLine } from "birdpaper-icon";

defineOptions({ name: "Image" });
const { clsBlockName } = useNamespace("image");

const props: ImageProps = defineProps(imageProps);
const emits = defineEmits(["load", "error"]);

const loading = ref(true);
const isError = ref(false);
const isInView = ref(!props.lazy);
const imageRef = ref<HTMLElement | null>(null);
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

const imgSrc = computed(() => {
  if (props.lazy && !isInView.value) {
    return props.placeholder;
  }
  return props.src;
});

const cls = computed(() => {
  return [
    clsBlockName,
    {
      [`${clsBlockName}-loading`]: loading.value,
      [`${clsBlockName}-error`]: isError.value,
    },
  ];
});

const handleLoad = (event: Event) => {
  loading.value = false;
  isError.value = false;
  emits("load", event);
};

const handleError = (event: Event) => {
  loading.value = false;
  isError.value = true;
  if (props.fallback) {
    (event.target as HTMLImageElement).src = props.fallback;
  }
  emits("error", event);
};

const setupLazyLoad = () => {
  if (!props.lazy) return;

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
};

watch(
  () => props.src,
  () => {
    resetImage();
  }
);

watch(isInView, (val) => {
  if (val) {
    resetImage();
  }
});

onMounted(() => {
  nextTick(() => {
    if (window.IntersectionObserver) {
      setupLazyLoad();
      return;
    }
    isInView.value = true;
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>
