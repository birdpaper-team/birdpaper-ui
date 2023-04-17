<template>
  <li :class="name">
    <span v-if="type !== 'text'" class="bp-message-icon">
      <i v-if="type === 'success'" class="ri-checkbox-circle-fill"></i>
      <i v-if="type === 'error'" class="ri-close-circle-fill"></i>
      <i v-if="type === 'warning'" class="ri-error-warning-fill"></i>
      <i v-if="type === 'loading'" class="ri-loader-5-line"></i>
    </span>
    <span class="bp-message-content">{{content }}{{ duration }}</span>
    <span v-if="closeable" class="bp-message-close" @click="handleClose">
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
  type: { type: String as PropType<MessageType>, default: MessageType.Text },
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
