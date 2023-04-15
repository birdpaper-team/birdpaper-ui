<template>
  <TransitionGroup :class="groupCls" name="fademsg" tag="ul">
    <template :key="`${v.id}`" v-for="v in list">
      <message :id="v.id" :content="v.content" @close="onMessageClose"></message>
    </template>
  </TransitionGroup>
</template>

<script setup lang="ts" name="MessageList">
import { PropType, computed } from "vue";
import { MessageItem } from "./type";
import message from "./message.vue";

const name = "bp-message-list";

const props = defineProps({
  list: { type: Array as PropType<MessageItem[]>, default: () => [] },
});
const emits = defineEmits<{
  (e: "close", id: string | number): void;
}>();

const onMessageClose = (id: string | number) => {
  emits("close", id);
};

const groupCls = computed(() => {
  return `${name}`;
});
</script>
