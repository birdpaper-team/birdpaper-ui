<template>
  <div :class="clsName" :style="imgStyle">
    <img
      ref="imageRef"
      :class="`${name}-img`"
      :alt="alt"
      :title="title"
      :style="{ ...imgStyle, ...fitStyle }"
      @load="onLoad"
      @error="onError" />
    <div :class="`${name}-loading`" v-if="isLoading">
      <slot name="loading">
        <IconImage2Fill size="24" />
      </slot>
    </div>
    <div :class="`${name}-error`" v-if="!isLoading && isError">
      <slot name="error">
        <IconImage2Fill size="24" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { CSSProperties, PropType, computed, defineComponent, ref, watchEffect } from "vue";
import { ImageFit } from "./types";
import { IconImage2Fill } from "birdpaper-icon";
import { isString } from "../../../utils/util";

export default defineComponent({
  name: "Image",
  props: {
    /** 图片资源地址 */
    src: { type: String, default: "" },
    /** 图片适应类型 */
    fit: { type: String as PropType<ImageFit>, default: "fill" },
    /** 文字描述 */
    alt: { type: String },
    /** 标题 */
    title: { type: String },
    /** 图片宽度 */
    width: { type: [String, Number] as PropType<string | number> },
    /** 图片高度 */
    height: { type: [String, Number] as PropType<string | number> },
  },
  emits: ["load", "error"],
  components: { IconImage2Fill },
  setup(props, { emit, slots }) {
    const name = "bp-image";
    const imageRef = ref();
    const loadStatus = ref<"loading" | "load" | "error">("loading");

    const isLoading = computed<boolean>(() => loadStatus.value === "loading");
    const isError = computed<boolean>(() => loadStatus.value === "error");
    const imgStyle = computed<CSSProperties>(() => ({
      width: isString(props.width) ? props.width : `${props.width}px`,
      height: isString(props.height) ? props.height : `${props.height}px`,
    }));
    const fitStyle = computed<CSSProperties>(() => {
      if (props.fit) {
        return { objectFit: props.fit };
      }
      return {};
    });

    const clsName = computed(() => {
      let cls = [name, { "bp-image-auto-ratio": loadStatus.value === "load" }];
      return cls;
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

      loadStatus.value = "loading";
      imageRef.value.src = props.src;
    });

    return {
      name,
      clsName,
      imageRef,
      loadStatus,
      onLoad,
      onError,
      slots,
      imgStyle,
      fitStyle,
      isLoading,
      isError,
    };
  },
});
</script>
