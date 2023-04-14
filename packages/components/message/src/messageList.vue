<template>
  <TransitionGroup :class="groupCls" name="fademsg" tag="ul">
    <li :key="`${v.id}`" v-for="v in list">
      <span>{{ v.content }}</span>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts" name="MessageList">
import { PropType, computed, } from "vue";
import { MessageItem } from "./type";

const name = "bp-message-list";

const props = defineProps({
  /** 消息ID Message id */
  id: { type: String, default: "" },
  list: { type: Array as PropType<MessageItem[]>, default: () => [] },
});

const groupCls = computed(() => {
  return `${name}`;
});
</script>
