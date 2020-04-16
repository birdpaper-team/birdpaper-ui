/*
 * @Author: Sam
 * @Date: 2020-04-15 09:52:25
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-16 14:39:37
 */
<template>
  <div :id="id" class="bp-image" v-cloak>
    <!-- 图片 -->
    <img
      class="bp-image-inner"
      v-if="url !== '' && !loadError"
      :src="url"
      :alt="alt"
      :style="`object-fit:${fit}`"
    />
    <!-- 占位区域 -->
    <div class="bp-image-placeholder" v-if="url === '' && !loadError">
      <slot name="placeholder"></slot>
    </div>
    <!-- 加载失败 -->
    <div class="bp-image-error" v-if="loadError">
      <slot name="error">加载失败</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "bp-image",
  props: {
    // 图片资源地址
    src: {
      type: String,
      default: ""
    },
    // 图片 Alt 属性
    alt: {
      type: String,
      default: ""
    },
    // 图片适应类型
    fit: {
      type: String,
      default: "cover"
    },
    // 是否开启懒加载
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id:
        "image-" +
        Math.random()
          .toString(36)
          .substr(2), // 组件 ID
      loadError: false,
      bpImage: null, // 图片实体
      loadLock: false, // 加载锁
      url: "" // 图片地址
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.pageScroll, false);
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.lazy) {
        this.loadImage();
        return;
      }
      // 懒加载处理
      this.pageScroll();
      window.addEventListener("scroll", this.pageScroll, true);
    });
  },
  methods: {
    // 加载图片
    loadImage() {
      this.bpImage = new Image();
      this.bpImage.src = this.src;
      this.bpImage.onerror = () => {
        // 图片加载失败触发
        this.handleError();
      };
      // 加载完成将图片资源赋给 url
      this.bpImage.onload = () => {
        this.handleload();
      };
    },
    // 图片加载完成回调
    handleload() {
      this.url = this.bpImage.src;
      this.loadLock = true;
      this.$emit("load");
    },
    // 图片加载失败回调
    handleError() {
      this.loadError = true;
      this.loadLock = true;
      this.$emit("error");
    },
    // 页面滑动
    async pageScroll() {
      const el = document.getElementById(this.id);

      const elOffsetTop = Number(el.getBoundingClientRect().top);

      if (elOffsetTop + 10 < window.innerHeight && !this.loadLock) {
        this.loadImage();
      }
    }
  }
};
</script>

<style lang="less">
@import url("./bp-image.less");
</style>