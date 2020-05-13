/*
 * @Author: Sam
 * @Date: 2020-04-11 18:37:36
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-15 14:13:25
 */
<template>
  <div :class="avatarClass" @click="$emit('click')">
    <!-- 文本类型 -->
    <span v-if="textShow" class="avatar-text">
      <slot></slot>
    </span>
    <!-- 图标类型 -->
    <span v-if="iconShow" :class="['avatar-icon', icon]"></span>
    <!-- 图片类型 -->
    <img v-if="srcShow" :src="src" :alt="alt" :style="`object-fit:${fit}`" @error="handleError" />
  </div>
</template>

<script>
export default {
  name: "bp-avatar",
  props: {
    // 尺寸
    size: {
      type: String,
      default: "normal",
      validator: function(value) {
        return ["normal", "large", "small", "mini"].indexOf(value) !== -1;
      }
    },
    // 图标展示
    icon: {
      type: String,
      default: ""
    },
    // 图片资源地址
    src: {
      type: String,
      default: ""
    },
    // 头像形状
    shape: {
      type: String,
      default: "circle",
      validator: function(value) {
        return ["circle", "square"].indexOf(value) !== -1;
      }
    },
    // 图片适应类型
    fit: {
      type: String,
      default: "cover"
    },
    // 图片 Alt 属性
    alt: {
      type: String,
      default: ""
    }
  },
  computed: {
    // 构造组件类名
    avatarClass() {
      let className = ["bp-avatar"];
      className.push(`bp-avatar-${this.size}`);
      className.push(`bp-avatar-${this.shape}`);
      return className;
    },
    // 渲染为文本类型
    textShow() {
      return this.icon === "" && this.src === "";
    },
    // 渲染为图标类型
    iconShow() {
      return this.src === "" && this.icon !== "";
    },
    // 渲染为图片类型
    srcShow() {
      return this.src !== "" && this.icon === "";
    }
  },
  methods:{
    // 图片加载失败回调
    handleError(){
      this.$emit('error');
    }
  }
};
</script>
<style lang="less">
@import url("./bp-avatar.less");
</style>
