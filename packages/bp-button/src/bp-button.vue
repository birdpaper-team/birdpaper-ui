<template>
  <div :class="btnDivClass" @click="onClick" v-if="to === ''">
    <!-- 纯文本按钮 -->
    <p v-if="isTextBtn" class="btn-text"><slot></slot></p>

    <!-- 非文字按钮 -->
    <button v-else :class="btnClass" :disabled="isDisabled">
      <!-- 按钮图标 -->
      <span class="bp-icon" v-if="btnIcon !== '' && !$slots.default">
        <i :class="['bp-icon-inner', btnIcon]"></i>
      </span>
      <!-- 按钮文本内容 -->
      <span class="btn-text-inner" v-if="$slots.default">
        <i :class="['btn-text-inner-i', btnIcon]" v-if="btnIcon !== ''"></i>
        <slot></slot>
      </span>
    </button>
  </div>
  <a
    v-else
    :class="[btnClass, { 'bp-button-disabled': isDisabled }]"
    :disabled="isDisabled"
    :href="to"
    :target="target"
  >
    <!-- 按钮图标 -->
    <span class="bp-icon" v-if="btnIcon !== '' && !$slots.default">
      <i :class="['bp-icon-inner', btnIcon]"></i>
    </span>
    <!-- 按钮文本内容 -->
    <span class="btn-text-inner" v-if="$slots.default">
      <i :class="['btn-text-inner-i', btnIcon]" v-if="btnIcon !== ''"></i>
      <slot></slot>
    </span>
  </a>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  name: "bp-button",
  props: {
    loading: { type: Boolean, default: false }, // 是否加载
    disabled: { type: Boolean, default: false }, // 是否禁用
    plain: { type: Boolean, default: false }, // 是否幽灵按钮
    icon: { type: String, default: "" }, // 按钮图标
    round: { type: Boolean, default: false }, // 是否圆角
    block: { type: Boolean, default: false }, // 宽度是否撑满父级元素
    noBorder: { type: Boolean, default: false }, // 是否去除边框
    target: { type: String, default: "_self" }, // 是否去除边框
    to: { type: String, default: "" }, // 跳转链接
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return (
          [
            "text",
            "default",
            "primary",
            "success",
            "warning",
            "danger",
          ].indexOf(value) !== -1
        );
      },
    }, // 按钮类型
    size: {
      type: String,
      default: "normal",
      validator: function(value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      },
    }, // 按钮尺寸
  },
  emits: ["click"],
  setup(props, { emit }) {
    const btnIcon = ref(""); // 按钮图标

    // 是否为纯文本类型按钮
    const isTextBtn = computed(() => props.type === "text" && props.t0 !== "");

    // 外层Div样式，控制Radius、Display、Border等属性
    const btnDivClass = computed(() => {
      let name = ["bp-button"];

      if (props.round) name.push("btn-round"); // 圆角样式
      if (props.block) name.push("btn-block"); // 宽度是否撑满父级元素
      if (props.noBorder) name.push("btn-no-border"); // 是否去除边框

      return name;
    });

    // 非纯文本按钮下的内层样式
    const btnClass = computed(() => {
      let name = [
        `bp-button-inner`,
        `btn-${props.type}${props.plain ? "-plain" : ""}`,
        `btn-size-${props.size}`,
      ]; // 按钮类型和尺寸

      if (props.block) name.push("btn-block"); // 宽度是否撑满父级元素

      return name;
    });

    watch(
      () => props.icon,
      (val) => (btnIcon.value = val),
      { immediate: true }
    );

    watch(
      () => props.loading,
      (val) =>
        (btnIcon.value = val ? "ri-loader-fill bp-icon-loading" : props.icon),
      { immediate: true }
    );

    // 禁用状态，除了传入属性外，还应考虑加载中的情况
    const isDisabled = computed(() => props.disabled || props.loading);

    const { onClick } = useButtonEvent(props, emit);

    return {
      btnDivClass,
      btnClass,
      onClick,
      isTextBtn,
      btnIcon,
      isDisabled,
    };
  },
};

// 按钮事件
function useButtonEvent(props, emit) {
  // 点击触发
  const onClick = () => {
    const { to } = props;
    if (!to) return emit("click");
  };

  return {
    onClick,
  };
}
</script>
