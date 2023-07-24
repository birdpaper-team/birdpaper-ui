<template>
  <div :class="name">
    <img ref="imageRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "Image",
  props: {
    /** 图片资源地址 */
    src: { type: String, default: "" },
    /** 图片适应类型 */
    fit: { type: String, default: "" },
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const name = "bp-image";
    const imageRef = ref();
    const loading = ref<boolean>(false);
    const isLoadError = ref<boolean>(false);

    watchEffect(() => {
      if (!props.src || !imageRef.value) return;

      // imageRef.value.src = props.src;
    });

    return {
      name,
      imageRef,
    };
  },
});
</script>
