<template>
  <div :class="name">
    <component :is="tableComponent[type]" :data :lang="resolvedLang" @copy="handleCopy"></component>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { ApiType, PropItem } from "./types";
import propsTable from "./components/props-table.vue";
import eventTable from "./components/event-table.vue";
import slotTable from "./components/slot-table.vue";
import methodTable from "./components/method-table.vue";
import { useClipboard } from "@vueuse/core";
import { Message } from "@birdpaper-ui/components/message";
import { locales } from "../../locales";
import { useData } from "vitepress";

const name = "api-block";
const props = defineProps({
  type: { type: String as PropType<ApiType>, default: "prop" },
  data: { type: Array as PropType<PropItem[]>, default: () => [] },
  lang: { type: String as PropType<"zh-CN" | "en">, default: undefined },
});

const { lang: pageLang } = useData();
const resolvedLang = computed<"zh-CN" | "en">(() => {
  if (props.lang) return props.lang;
  return pageLang.value === "en" ? "en" : "zh-CN";
});

const tableComponent = {
  prop: propsTable,
  event: eventTable,
  slot: slotTable,
  method: methodTable,
};

const { copy, isSupported } = useClipboard();
const handleCopy = (text: string) => {
  if (!isSupported) {
    return Message.error(locales[resolvedLang.value].COPY_ERROR);
  }
  copy(text);
  return Message.success(locales[resolvedLang.value].COPY_SUCCESS);
};
</script>
