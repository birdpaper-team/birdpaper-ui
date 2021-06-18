/* * @Author: Sam * @Date: 2021-06-11 20:33:52 * @Last Modified by: Sam * @Last
Modified time: 2021-06-11 20:35:06 */
<template>
  <div
    :id="id"
    :style="`width:${width}px;height:${height}px`"
    ref="container"
    class="bp-image"
    v-cloak
  >
    <!-- 占位区域 -->
    <div class="bp-image-placeholder" v-if="loading">
      <slot name="placeholder">加载中</slot>
    </div>
    <!-- 加载失败 -->
    <div class="bp-image-error" v-else-if="isLoadError">
      <slot name="error">加载失败</slot>
    </div>
    <!-- 图片 -->
    <img v-else class="bp-image-inner" :src="src" :style="imgStyle" />
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  ref,
  computed,
} from "vue";
import { throttle, on, off } from "../../utils/util.js";
import {
  isInContainer,
  isHtmlEl,
  getScrollContainer,
} from "../../utils/dom.js";
export default {
  name: "bp-image",
  props: {
    width: { type: [Number, Object, String], default: null }, // 容器宽度
    height: { type: [Number, Object, String], default: null }, // 容器高度
    src: { type: String, default: "" }, // 图片资源地址
    fit: { type: String, default: "cover" }, // 图片适应类型
    lazy: { type: Boolean, default: false }, // 是否开启懒加载
    radius: { type: [Number, String], default: "" }, // 图片圆角大小
    scrollContainer: { type: String, default: "" }, // 懒加载下指定的滚动容器
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const state = reactive({
      id:
        "bp-image-" +
        Math.random()
          .toString(36)
          .substr(2), // 组件 ID
      isLoadError: false, // 是否加载失败
      loading: true, // 加载状态
      imgWidth: 0,
      imgHeight: 0,
    });

    let _scrollContainer = null;
    let _lazyLoadHandler = null;
    const container = ref(null);

    // 加载图片
    const loadImage = () => {
      state.loading = true;
      state.isLoadError = false;

      const image = new Image();
      image.onload = (e) => onComplete(e, image);
      image.onerror = () => onError(image);
      image.src = props.src;
    };

    // 资源地址改变重载图片
    watch(
      () => props.src,
      () => {
        loadImage();
      }
    );

    const imgStyle = computed(() => {
      return `object-fit:${props.fit};border-radius:${props.radius}px`;
    });

    // 图片加载完成回调
    function onComplete(e, image) {
      state.imgWidth = image.width;
      state.imgHeight = image.height;
      state.loading = false;
      state.isLoadError = false;
      emit("load", e);
    }

    // 图片加载失败回调
    function onError(image) {
      state.loading = false;
      state.isLoadError = true;
      emit("error", image);
    }

    function onLazyLoad() {
      if (isInContainer(container.value, _scrollContainer)) {
        loadImage();
        removeLazyLoadListener();
      }
    }

    // 添加懒加载监听
    function addLazyLoadLintener() {
      const { scrollContainer } = props;

      if (isHtmlEl(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (
        typeof scrollContainer === "string" &&
        scrollContainer !== ""
      ) {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = getScrollContainer(container.value);
      }
      if (_scrollContainer) {
        _lazyLoadHandler = throttle(onLazyLoad, 200);
        on(_scrollContainer, "scroll", _lazyLoadHandler);
        setTimeout(() => onLazyLoad(), 100);
      }
    }

    // 移除懒加载监听
    function removeLazyLoadListener() {
      if (!_scrollContainer || !_lazyLoadHandler) return;

      off(_scrollContainer, "scroll", _lazyLoadHandler);

      _scrollContainer = null;
      _lazyLoadHandler = null;
    }

    onMounted(() => {
      if (!props.lazy) {
        return loadImage();
      }
      nextTick(addLazyLoadLintener);
    });

    onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener();
    });

    return {
      ...toRefs(state),
      container,
      imgStyle,
    };
  },
};
</script>
