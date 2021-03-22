/*
 * @Author: Sam
 * @Date: 2020-07-14 10:06:27
 * @Last Modified by: Sam
 * @Last Modified time: 2021-01-20 14:31:53
 */
<template>
  <div :class="className" v-if="!hidden">
    <slot></slot>
    <!-- 圆点标记 -->
    <transition name="bp-fade-in">
      <span class="bp-badge-dot" v-if="isDot"></span>
    </transition>
    <!-- 显示具体字符标记 -->
    <transition name="bp-fade-in">
      <span
        class="bp-badge-value"
        v-if="!isDot"
        v-text="badgeText"
      ></span>
    </transition>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "bp-badge",
  props: {
    // 显示值
    value: {
      type: [String, Number],
      default: "",
    },
    // 最大值
    max: {
      type: Number,
      default: 0,
    },
    // 是否渲染成圆点
    isDot: {
      type: Boolean,
      default: false,
    },
    // 隐藏标记
    hidden: {
      type: Boolean,
      default: false,
    },
    // 类型
    type: {
      type: String,
      default: "danger",
      validator: function (value) {
        return (
          ["primary", "success", "warning", "danger"].indexOf(value) !== -1
        );
      },
    },
  },
  setup(props) {
    const { badgeText } = useBadge(props);

    const { className } = useClass(props);

    return {
      badgeText,
      className,
    };
  },
};

// 标记控制
function useBadge(props) {
  // 具体显示的标记值
  const badgeText = computed(() => {
    // 是否符合溢出类型
    const isOverFlow =
      props.max !== 0 &&
      typeof props.value === "number" &&
      props.value > props.max;

    return isOverFlow ? `${props.max}+` : props.value;
  });

  return {
    badgeText,
  };
}

// 样式控制
function useClass(props) {
  const className = computed(() => {
    let name = ["bp-badge"];
    name.push(`bp-badge-${props.type}`);
    return name;
  });

  return {
    className,
  };
}
</script>