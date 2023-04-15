<template>
  <li>
    <span>{{ props.content }}</span>
  </li>
</template>

<script setup lang="ts" name="MessageList">
import { PropType, computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { MessageItem, MessageType } from "./type";

const name = "bp-message";

const props = defineProps({
  /** 消息ID Message id */
  id: { type: [String, Number], default: "" },
  type: { type: String as PropType<MessageType>, default: MessageType.Text },
  icon: { type: String, default: "" },
  content: { type: String, default: "" },
  duration: { type: Number, default: 3000 },
  closeable: { type: Boolean, default: false },
});
const emits = defineEmits<{
  (e: "close", id: string | number): void;
}>();

const timer = ref(0);

const init = () => {
  if (props.duration > 0) {
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
