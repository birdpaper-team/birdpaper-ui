<template>
  <div></div>
    <!-- <li :key="`${v.id}`">
      <span>{{ v.content }}</span>
    </li> -->
</template>

<script setup lang="ts" name="MessageList">
import { PropType, computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { MessageItem, MessageType } from "./type";

const name = "bp-message";

const props = defineProps({
  id: { type: String, default: "" },
  type: { type: String as PropType<MessageType>, default: MessageType.Text },
  duration: { type: Number, default: 3000 },
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
  // emits("close",props.id)
};

onMounted(() => {
  // nextTick(() => init());
});

onUnmounted(() => {
  clearTimer();
});
</script>
