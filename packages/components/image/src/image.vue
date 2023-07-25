<template>
  <div :class="name" :style="imgStyle">
    <img
      ref="imageRef"
      :alt="alt"
      :title="title"
      :style="{ ...imgStyle, ...fitStyle }"
      @load="onLoad"
      @error="onError"
    />
    <slot name="loading" v-if="isLoading">
      <div :class="`${name}-loading`">
        <span>加载中</span>
      </div>
    </slot>
    <slot name="error" v-if="!isLoading && isError">
      <div :class="`${name}-error`">
        <i class="ri-image-2-line"></i>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { CSSProperties, PropType, computed, defineComponent, ref, watchEffect } from "vue";
import { ImageFit } from "./types";

export default defineComponent({
  name: "Image",
  props: {
    /** 图片资源地址 */
    src: { type: String, default: "" },
    /** 图片适应类型 */
    fit: { type: String as PropType<ImageFit>, default: 'fill' },
    /** 文字描述 */
    alt: { type: String, default: "" },
    /** 标题 */
    title: { type: String, default: "" },
    /** 图片宽度 */
    width: { type: [String, Number] as PropType<string | number> },
    /** 图片高度 */
    height: { type: [String, Number] as PropType<string | number> },
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const name = "bp-image";
    const imageRef = ref();
    const loadStatus = ref<"loading" | "load" | "error">("loading");

    const isLoading = computed<boolean>(() => loadStatus.value === "loading");
    const isError = computed<boolean>(() => loadStatus.value === "error");
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
      isError,
    };
  },
});
</script>
