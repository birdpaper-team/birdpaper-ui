<!--
 * @ Author: Sam
 * @ Create Time: 2023-02-21 21:05:39
 * @ Modified by: Sam
 * @ Modified time: 2023-03-08 05:15:05
 * @ Description: 按钮 Button
 -->

<template>
  <button :class="btnClass" type="button" :disabled="isDisabled" @click="onClick">
    <span v-if="btnIcon">
      <i :class="btnIcon"></i>
    </span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts" name="bp-button">
import { ButtonType, ButtonSize, ButtonShape, ButtonStatus } from "./types";
import { computed, useSlots, PropType } from "vue";
const name = "bp-btn";

const props = defineProps({
  /** 按钮类型 Type of the button */
  type: { type: String as PropType<ButtonType>, default: "normal" },
  /** 按钮尺寸 Size of the button */
  size: { type: String as PropType<ButtonSize>, default: "normal" },
  /** 按钮形状 Shape of the button */
  shape: { type: String as PropType<ButtonShape>, default: "square" },
  /** 按钮状态 Status of the button */
  status: { type: String as PropType<ButtonStatus>, default: "normal" },
  /** 是否加载中 Loading or not */
  loading: { type: Boolean, default: false },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 按钮图标 Button icon */
  icon: { type: String, default: "" },
  /** 是否撑满父级 Block or not */
  block: { type: Boolean, default: false },
});
const emit = defineEmits(["click"]);

const isDisabled = computed(() => props.disabled || props.loading); // 禁用状态，除了传入属性外，还应考虑「加载中」的情况

// 按钮样式
const btnClass = computed(() => {
  let className = [
    name,
    `${name}-size-${props.size}`,
    `${name}-shape-${props.shape}`,
    `${name}-type-${props.type}-status-${props.status}`,
  ];
  return className;
});

const btnIcon = computed(() => {
  return props.loading ? "bp-icon-loading ri-loader-5-line" : props.icon;
});

const onClick = () => {
  if (!props.disabled) return emit("click");
};
</script>
