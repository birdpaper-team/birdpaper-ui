<template>
  <button :class="btnClass" :disabled="isDisabled" :style="`${btnElStyle}`" @click="onClick">
    <i :class="icon" v-if="hasIcon"></i>
    <span v-if="hasSlotDefault">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts" name="bp-button">
import { ButtonSize, ButtonType } from "./types";
import { computed, ref, watch, useSlots, PropType } from "vue";
const props = defineProps({
  type: { type: String as PropType<ButtonType>, default: "default" }, // 按钮类型 Type of the button
  btnType: { type: String as PropType<ButtonType>, default: "default" }, // 按钮类型 Type of the button
  size: { type: String as PropType<ButtonSize>, default: "normal" }, // 按钮尺寸 Size of the button
  loading: { type: Boolean, default: false }, // 是否加载 Loaded or not
  disabled: { type: Boolean, default: false }, // 是否禁用 Disabled or not
  plain: { type: Boolean, default: false }, // 是否为朴素按钮 Plain button or not
  dashed: { type: Boolean, default: false }, // 是否虚线边框 Dashed border or not
  round: { type: Boolean, default: false }, // 是否圆角 Rounded or not
  icon: { type: String, default: "" }, // 按钮图标 Button icon
  block: { type: Boolean, default: false }, // 宽度是否撑满父级元素 Full of parent elements or not
  noBorder: { type: Boolean, default: false }, // 是否去除边框 Remove borders or not
  theme: { type: String, default: "primary" }, // 主题色，text下生效 The theme color(This parameter is valid only when type is text)
  href: { type: String, default: "" }, // 跳转链接 Skip links
  target: { type: String, default: "_self" }, // 跳转方式 Target of links
  minWidth: { type: [String, Number], default: "" }, // 最小宽度，单位px Minimum width, px
});
const emit = defineEmits(["click"]);

const icon = ref(""); // 按钮图标
const hasSlotDefault = !!useSlots().default;

const isTextBtn = computed(() => props.type === "text"); // 是否为「纯文本」类型按钮
const hasIcon = computed(() => !!icon.value); // 是否有图标显示
const isLinkButton = computed(() => !!props.href); // 是否为「点击跳转」类型的按钮
const btnElStyle = computed(() => props.minWidth && `min-width:${props.minWidth}px`); // 控制按钮的行内样式
const isDisabled = computed(() => props.disabled || props.loading); // 禁用状态，除了传入属性外，还应考虑「加载中」的情况

// 纯文本按钮样式
const textBtnClass = computed(() => {
  let name = [
    "bp-button",
    "bp-btn-text",
    `bp-${props.size}-height`,
    { "bp-btn-block": props.block },
    { "bp-btn-text-disabled": props.disabled },
  ];
  hasSlotDefault && name.push(`bp-btn-padding-${props.size}`); // 尺寸边框设置
  return name;
});

// 非纯文本按钮样式
const btnClass = computed(() => {
  let name = [`bp-button`, `bp-${props.size}-height`, { "bp-btn-block": props.block }]; // 按钮类型和尺寸

  hasSlotDefault && name.push(`bp-btn-padding-${props.size}`); // 尺寸边距设置

  // 文字按钮下需要单独考虑自身的主题颜色，以及控制独有的样式（去除边框和背景）
  if (isTextBtn.value) {
    name.push(`bp-btn-theme-${props.theme} bp-btn-text-style`);
    return name;
  }

  name.push(`bp-btn-${props.type}${props.plain ? "-plain" : ""}`);
  props.dashed && name.push("bp-btn-dashed"); // 虚线边框
  props.round && name.push("bp-btn-round"); // 圆角样式
  props.noBorder && name.push("bp-btn-no-border"); // 是否去除边框

  return name;
});

watch(
  () => props.icon,
  v => (icon.value = v),
  { immediate: true }
);

watch(
  () => props.loading,
  v => (icon.value = v ? "ri-loader-5-fill bp-icon-loading" : props.icon),
  { immediate: true }
);

const onClick = () => {
  // isLinkButton.value && clickByLink(props.href, props.target);
  if (!isLinkButton.value && !props.disabled) return emit("click");
};
</script>
