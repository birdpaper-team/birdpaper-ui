<template>
  <li :class="[clsName, 'select-none']">
    <span v-if="type !== 'text'" :class="[`${clsBlockName}-icon`, `icon-${type}`]">
      <component :is="iconType[type]" size="18px"></component>
    </span>
    <span :class="`${clsBlockName}-content`">{{ content }}</span>

    <span v-if="closeable" :class="`${clsBlockName}-close`" @click="handleClose">
      <IconCloseLine size="14" />
    </span>
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { MessageProps, messageProps } from "./props";
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import {
  IconCloseLine,
  IconCheckboxCircleFill,
  IconCloseCircleFill,
  IconErrorWarningFill,
  IconLoader5Line,
} from "birdpaper-icon";

defineOptions({ name: "Message" });
const { clsBlockName } = useNamespace("message");

const props: MessageProps = defineProps(messageProps);
const emits = defineEmits<{
  remove: [id?: string];
}>();

const iconType = {
  success: IconCheckboxCircleFill,
  error: IconCloseCircleFill,
  warning: IconErrorWarningFill,
  loading: IconLoader5Line,
};

const statusMap = { text: "gary", loading: "gary", success: "success", warning: "warning", error: "danger" };
const clsName = computed(() => {
  let cls = [clsBlockName];
  cls.push(props.plain ? `${clsBlockName}-plain-${statusMap[props.type]}` : `${clsBlockName}-${statusMap[props.type]}`);

  return cls;
});

const timer = ref(0);
const init = () => {
  clearTimer();

  if (props.duration > 0 && props.type !== "loading") {
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
  emits("remove", props.id);
  props.onClose && props.onClose(props.id);
};

onMounted(() => {
  nextTick(() => init());
});

onUnmounted(() => {
  clearTimer();
});

watch(
  () => props.content,
  () => init()
);
</script>
