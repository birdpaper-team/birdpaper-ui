/*
 * @Author: Sam
 * @Date: 2020-04-15 09:52:25
 * @Last Modified by: Sam
 * @Last Modified time: 2021-01-20 14:33:43
 */
<template>
  <div :id="id" class="bp-image" v-cloak>
    <!-- 占位区域 -->
    <div class="bp-image-placeholder" v-if="loading">
      <slot name="placeholder">加载中</slot>
    </div>
    <!-- 加载失败 -->
    <div class="bp-image-error" v-else-if="isLoadError">
      <slot name="error">加载失败</slot>
    </div>
    <!-- 图片 -->
    <img
      v-else
      class="bp-image-inner"
      :src="src"
      :style="`width:${imgWidth};height:${imgHeight};object-fit:${fit};border-radius:${radius}`"
    />
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  ref,
  nextTick,
} from "vue";
import { throttle } from "../../utils/util.js";
export default {
  name: "bp-image",
  props: {
    // 图片资源地址
    src: {
      type: String,
      default: "",
    },
    // 图片适应类型
    fit: {
      type: String,
      default: "cover",
    },
    // 是否开启懒加载
    lazy: {
      type: Boolean,
      default: false,
    },
    // 图片圆角大小
    radius: {
      type: String,
      default: "",
    },
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const state = reactive({
      id: "image-" + Math.random().toString(36).substr(2), // 组件 ID
    });

    const isLoadError = ref(false); // 是否加载失败
    const loading = ref(true); // 加载状态
    const imgWidth = ref(0);
    const imgHeight = ref(0);

    onMounted(() => {
      if (!props.lazy) {
        loadImage();
        return;
      }
      // 懒加载处理
      nextTick(() => {
        handleLazyLoad();
        window.addEventListener("scroll", throttle(handleLazyLoad, 400));
      });
    });

    onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener();
    });

    // 加载图片
    const loadImage = () => {
      loading.value = true;
      isLoadError.value = false;

      const image = new Image();
      image.onload = (e) => handleload(e, image);
      image.onerror = () => handleError(image);
      image.src = props.src;
    };

    // 资源地址改变重载图片
    watch(
      () => props.src,
      () => {
        loadImage();
      }
    );

    // 图片加载完成回调
    const handleload = (e, image) => {
      imgWidth.value = image.width;
      imgHeight.value = image.height;
      loading.value = false;
      emit("load");
    };

    // 图片加载失败回调
    const handleError = (image) => {
      loading.value = false;
      isLoadError.value = true;
      emit("error");
    };

    // 添加懒加载监听
    const handleLazyLoad = () => {
      const el = document.getElementById(state.id);

      let rest = el.getBoundingClientRect();
      let clientHeight = document.documentElement.clientHeight;

      if (rest.bottom >= 0 && rest.top < clientHeight) {
        loadImage();
        removeLazyLoadListener();
      }
    };

    // 移除懒加载监听
    const removeLazyLoadListener = () => {
      window.removeEventListener("scroll", handleLazyLoad);
    };

    return {
      ...toRefs(state),
      isLoadError,
      loading,
      imgWidth,
      imgHeight,
    };
  },
};
</script>