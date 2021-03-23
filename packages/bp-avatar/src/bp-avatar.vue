/*
 * @Author: Sam
 * @Date: 2020-04-11 18:37:36
 * @Last Modified by: Sam
 * @Last Modified time: 2021-01-20 14:31:45
 */
<template>
  <div :class="avatarClass" @click="handleClick">
    <!-- 文本类型 -->
    <span v-if="textShow" class="avatar-text">
      <slot></slot>
    </span>
    <!-- 图标类型 -->
    <span v-if="iconShow" :class="['avatar-icon', icon]"></span>
    <!-- 图片类型 -->
    <img
      v-if="srcShow"
      :src="src"
      :alt="alt"
      :style="`object-fit:${fit}`"
      @error="handleError"
    />
  </div>
</template>

<script>
import { compile, computed, handleError } from "vue";
export default {
  name: "bp-avatar",
  props: {
    // 尺寸
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["normal", "large", "small", "mini"].indexOf(value) !== -1;
      },
    },
    // 图标展示
    icon: {
      type: String,
      default: "",
    },
    // 图片资源地址
    src: {
      type: String,
      default: "",
    },
    // 头像形状
    shape: {
      type: String,
      default: "circle",
      validator: function (value) {
        return ["circle", "square"].indexOf(value) !== -1;
      },
    },
    // 图片适应类型
    fit: {
      type: String,
      default: "cover",
    },
    // 图片 Alt 属性
    alt: {
      type: String,
      default: "",
    },
  },
  emits: ["click", "error"],
  setup(props, { emit }) {
    // 构造组件类名
    let avatarClass = computed(() => {
      let className = ["bp-avatar"];
      className.push(`bp-avatar-${props.size}`);
      className.push(`bp-avatar-${props.shape}`);
      return className;
    });

    // 渲染为文本类型
    let textShow = computed(() => {
      return props.icon === "" && props.src === "";
    });

    // 渲染为图标类型
    let iconShow = computed(() => {
      return props.src === "" && props.icon !== "";
    });

    // 渲染为图片类型
    let srcShow = computed(() => {
      return props.src !== "" && props.icon === "";
    });

    const { handleError, handleClick } = useAvatarEvent(emit);

    return {
      avatarClass,
      textShow,
      iconShow,
      srcShow,
      handleError,
      handleClick,
    };
  },
};

// 事件处理
function useAvatarEvent(emit) {
  // 点击触发
  const handleClick = () => {
    emit("click");
  };

  // 图片加载失败回调
  const handleError = () => {
    emit("error");
  };

  return {
    handleClick,
    handleError,
  };
}
</script>