<template>
  <li :class="name">
    <span v-if="type !== 'text'" :class="`${name}-icon`">
      <i v-if="type === 'success'" class="ri-checkbox-circle-fill"></i>
      <i v-if="type === 'error'" class="ri-close-circle-fill"></i>
      <i v-if="type === 'warning'" class="ri-error-warning-fill"></i>
      <i v-if="type === 'loading'" class="ri-loader-4-line"></i>
    </span>
    <span :class="`${name}-content`">{{ content }}</span>
    <span v-if="closeable" :class="`${name}-close`" @click="handleClose">
      <i class="ri-close-line"></i>
    </span>
  </li>
</template>

<script setup lang="ts" name="MessageList">
import { PropType, nextTick, onMounted, onUnmounted, ref } from "vue";
import { MessageType } from "./type";

const name = "bp-message";

const props = defineProps({
  /** 消息ID Message id */
  id: { type: [String, Number], default: "" },
  /** 消息提示类型 Message prompt type */
  type: { type: String as PropType<MessageType>, default: MessageType.Text },
  /** 消息提示内容 Message prompt content */
  content: { type: String, default: "" },
  /** 延迟关闭时间 Delayed shutdown time */
  duration: { type: Number, default: 3000 },
  /** 是否允许手动关闭 Closeable or not */
  closeable: { type: Boolean, default: false },
});
const emits = defineEmits<{
  close: [id: string | number];
}>();

const timer = ref(0);

const init = () => {
  if (props.duration > 0 && props.type !== MessageType.Loading) {
    timer.value = window.setTimeout(handleClose, props.duration);
  }
};

const clearTimer = () => {
  if (timer) {
    window.clearTimeout(timer.value);
    timer.value = 0;
  }
};

const handleClose = () => {
  emits("close", props.id);
};

onMounted(() => {
  nextTick(() => init());
});

onUnmounted(() => {
  clearTimer();
});
</script>
