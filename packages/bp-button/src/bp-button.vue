<template>
<<<<<<< HEAD
  <button
    :type="htmlType"
    :class="btnClass"
    :disabled="isDisabled"
    :style="btnElStyle"
    @click="onClick"
  >
    <i :class="icon" v-if="hasIcon"></i>
    <span v-if="hasSlotDefault"> <slot></slot> </span>
  </button>
</template>

<script setup>
import { computed, ref, watch, useSlots, defineProps, defineEmits } from "vue";
import { useButton } from "../../use/button";
import { useDesign } from "../../use/design";

const props = defineProps({
  type: { type: String, default: "default", validator: typeValidator }, // 按钮类型 Type of the button
  size: { type: String, default: "normal", validator: sizeValidator }, // 按钮尺寸 Size of the button
  loading: { type: Boolean, default: false }, // 是否加载 Loaded or not
  disabled: { type: Boolean, default: false }, // 是否禁用 Disabled or not
  plain: { type: Boolean, default: false }, // 是否为朴素按钮 Plain button or not
  dashed: { type: Boolean, default: false }, // 是否虚线边框 Dashed border or not
  round: { type: Boolean, default: false }, // 是否圆角 Rounded or not
  icon: { type: String, default: "" }, // 按钮图标 Button icon
  block: { type: Boolean, default: false }, // 宽度是否撑满父级元素 Full of parent elements or not
  noBorder: { type: Boolean, default: false }, // 是否去除边框 Remove borders or not
  theme: { type: String, default: "primary", validator: themeValidator }, // 主题色，text下生效 The theme color(This parameter is valid only when type is text)
  href: { type: String, default: "" }, // 跳转链接 Skip links
  target: { type: String, default: "_self" }, // 跳转方式 Target of links
  minWidth: { type: [String, Number], default: "52" }, // 最小宽度，单位px Minimum width, px
  htmlType: { type: String, default: "button" }, // 原生 Type 属性 Native Type attribute
});
const emit = defineEmits(["click"]);
=======
  <div :class="btnDivClass" @click="onClick">
    <!-- 纯文本按钮 -->
    <p
      v-if="isTextBtn"
      :class="[
        'btn-text',
        `btn-theme-${theme}`,
        { 'btn-text-disabled': isDisabled },
      ]"
    >
      <slot></slot>
    </p>

    <!-- 非文字按钮 -->
    <button
      v-else
      :class="btnClass"
      :disabled="isDisabled"
      :style="`min-width:${minWidth}px`"
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
    </button>
  </div>
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
    theme: { type: String, default: "primary" }, //  主题色，text 下使用
    to: { type: String, default: "" }, // 跳转链接
    minWidth: { type: [String, Number], default: "" }, // 最小宽度，单位 px
    type: {
      type: String,
      default: "default",
      validator: function (value) {
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
      validator: function (value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      },
    }, // 按钮尺寸
  },
  emits: ["click"],
  setup(props, { emit }) {
    const btnIcon = ref(""); // 按钮图标
>>>>>>> 19274d2f9fdf23803f99b7894fc5ee03af26629b

const icon = ref(""); // 按钮图标
const hasSlotDefault = !!useSlots().default;

const isTextBtn = computed(() => props.type === "text"); // 是否为「纯文本」类型按钮
const hasIcon = computed(() => !!icon.value); // 是否有图标显示
const isLinkButton = computed(() => !!props.href); // 是否为「点击跳转」类型的按钮
const btnElStyle = computed(() => `min-width:${props.minWidth}px`); // 控制按钮的行内样式
const isDisabled = computed(() => props.disabled || props.loading); // 禁用状态，除了传入属性外，还应考虑「加载中」的情况

// 纯文本按钮样式
const textBtnClass = computed(() => {
  let name = ["bp-button", "bp-btn-text", `bp-${props.size}-height`];
  props.block && name.push("bp-btn-block"); // 宽度是否撑满父级元素
  props.disabled && name.push("bp-btn-text-disabled");
  hasSlotDefault && name.push(`bp-btn-padding-${props.size}`); // 尺寸边框设置
  return name;
});

// 非纯文本按钮样式
const btnClass = computed(() => {
  let name = [`bp-button`, `bp-${props.size}-height`]; // 按钮类型和尺寸

  hasSlotDefault && name.push(`bp-btn-padding-${props.size}`); // 尺寸边距设置
  props.block && name.push("bp-btn-block"); // 宽度是否撑满父级元素

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
  isLinkButton.value && clickByLink(props.href, props.target);
  if (!isLinkButton.value && !props.disabled) return emit("click");
};
</script>

<script>
export default { name: "bp-button" };

const { typeValidator, clickByLink } = useButton();
const { sizeValidator, themeValidator } = useDesign();
</script>
