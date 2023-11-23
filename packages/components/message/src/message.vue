<template>
  <li :class="clsName">
    <span v-if="type !== 'text'" :class="[`${name}-icon`, `icon-${type}`]">
      <bp-icon :name="iconType[type]"></bp-icon>
    </span>
    <span :class="`${name}-content`" v-html="content"></span>
    <span v-if="closeable" :class="`${name}-close`" @click="handleClose">
      <bp-icon name="ri-close-line"></bp-icon>
    </span>
  </li>
</template>

<script setup lang="ts" name="MessageList">
import { PropType, nextTick, onMounted, onUnmounted, ref } from "vue";
import { MessageType } from "./type";
import { computed } from "vue";
import bpIcon from "../../icon/index";

const name = "bp-message";

const props = defineProps({
  /** 消息ID Message id */
  id: { type: String },
  /** 消息提示类型 Message prompt type */
  type: { type: String as PropType<MessageType>, default: "text" },
  /** 消息提示内容 Message prompt content */
  content: { type: String, default: "" },
  /** 延迟关闭时间 Delayed shutdown time */
  duration: { type: Number, default: 3000 },
  /** 是否允许手动关闭 Closeable or not */
  closeable: { type: Boolean, default: false },
  /** 是否开启无背景展示 */
  plain: { type: Boolean, default: false },
  /** 关闭后的回调函数 */
  onClose: { type: Function },
});
const emits = defineEmits<{
  remove: [id: string];
}>();

const timer = ref(0);
const iconType = {
  success: "ri-checkbox-circle-fill",
  error: "ri-close-circle-fill",
  warning: "ri-error-warning-fill",
  loading: "ri-loader-4-line",
};

const init = () => {
  if (props.duration > 0 && props.type !== "loading") {
    timer.value = window.setTimeout(handleClose, props.duration);
  }
};

const clsName = computed(() => {
  let cls = [name];
  cls.push(props.plain ? `${name}-plain` : `${name}-${props.type}`);

  return cls;
});

const clearTimer = () => {
  if (timer) {
    window.clearTimeout(timer.value);
    timer.value = 0;
  }
};

const handleClose = () => {
  emits("remove", props.id);
  props.onClose && props.onClose(props.id);
};

onMounted(() => {
  nextTick(() => init());
});

onUnmounted(() => {
  clearTimer();
});
</script>
