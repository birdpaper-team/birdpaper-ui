<template>
  <TransitionGroup
    :class="clsBlockName"
    name="message"
    tag="ul"
    role="status"
    aria-live="polite"
    aria-atomic="false"
  >
    <template v-for="v in filteredList" :key="`${v.id}`">
      <message
        :id="v.id"
        :type="v.type"
        :content="v.content"
        :duration="v.duration"
        :closeable="v.closeable || v.closable"
        :plain="v.plain"
        :on-close="v.onClose"
        @remove="onRemove"
      ></message>
    </template>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, PropType } from "vue";
import { MessageItem, MessagePosition } from "./type";
import message from "./message.vue";

defineOptions({ name: "MessageList" });
const { clsBlockName } = useNamespace("message-list");

const props = defineProps({
  list: { type: Array as PropType<MessageItem[]>, default: () => [] },
  position: { type: String as PropType<MessagePosition>, default: "top" },
});
const emits = defineEmits<{
  (e: "remove", id?: string): void;
}>();

const filteredList = computed(() => {
  return props.list.filter((item) => (item.position || "top") === props.position);
});

const onRemove = (id?: string) => emits("remove", id);
</script>
