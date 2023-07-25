<template>
  <div :class="name" :style="imgStyle">
    <img ref="imageRef" :style="{ ...imgStyle, ...fitStyle }" @load="onLoad" @error="onError" />
    <slot name="loading" v-if="isLoading">
      <div :class="`${name}-loading`">
        <span>加载中</span>
      </div>
    </slot>
    <slot name="error" v-if="!isLoading && loadStatus === 'error'">
      <div :class="`${name}-error`">
        <i class="ri-image-2-line"></i>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { CSSProperties, PropType, computed, defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "Image",
  props: {
    /** 图片资源地址 */
    src: { type: String, default: "" },
    /** 图片适应类型 */
    fit: { type: String as PropType<"contain" | "cover" | "fill" | "none" | "scale-down">, default: "fill" },
    alt: { type: String, default: "" },
    width: { type: [String, Number] as PropType<string | number> },
    height: { type: [String, Number] as PropType<string | number> },
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const name = "bp-image";
    const imageRef = ref();
    const loadStatus = ref<"loading" | "load" | "error">("loading");

    const isLoading = computed<boolean>(() => loadStatus.value === "loading");
    const imgStyle = computed<CSSProperties>(() => ({
      width: `${props.width}px`,
      height: `${props.height}px`,
    }));
    const fitStyle = computed<CSSProperties>(() => {
      if (props.fit) {
        return { objectFit: props.fit };
      }
      return {};
    });

    const onLoad = () => {
      loadStatus.value = "load";
      emit("load");
    };
    const onError = () => {
      loadStatus.value = "error";
      emit("error");
    };

    watchEffect(() => {
      if (!props.src || !imageRef.value) return;

      imageRef.value.src = props.src;
    });

    return {
      name,
      imageRef,
      loadStatus,
      onLoad,
      onError,
      imgStyle,
      fitStyle,
      isLoading,
    };
  },
});
</script>
