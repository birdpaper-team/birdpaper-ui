<template>
  <TransitionGroup class="bp-message-list" name="fademsg" tag="ul">
    <template v-for="v in list" :key="`${v.id}`">
      <message
        :id="v.id"
        :type="v.type"
        :content="v.content"
        :duration="v.duration"
        :closeable="v.closeable"
        :plain="v.plain"
        :on-close="v.onClose"
        @remove="onRemove"
      ></message>
    </template>
  </TransitionGroup>
</template>

<script setup lang="ts" name="MessageList">
import { PropType } from "vue";
import { MessageItem } from "./type";
import message from "./message.vue";

const props = defineProps({
  list: { type: Array as PropType<MessageItem[]>, default: () => [] },
});
const emits = defineEmits<{
  (e: "remove", id: string): void;
}>();

const onRemove = (id: string) => emits("remove", id);
</script>
