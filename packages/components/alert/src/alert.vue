<template>
  <div v-if="visible" :class="cls" role="alert">
    <div :class="`${clsBlockName}-inner`">
      <div :class="`${clsBlockName}-inner-title`">
        <component v-if="!hideIcon" :is="icon" size="16"></component>
        {{ props.title }}
      </div>
      <button v-if="showClose" type="button" :class="`${clsBlockName}-inner-close`" aria-label="Close" @click="handleClose">
        <slot name="close" />
        <template v-if="!slots.close">
          <IconCloseFill size="16" />
        </template>
      </button>
    </div>

    <div v-if="slots.content || props.content" :class="`${clsBlockName}-content`">
      <slot name="content" />
      <template v-if="!slots.content">
        {{ props.content }}
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { alertProps, AlertProps } from "./props";
import {
  IconCloseFill,
  IconInformationFill,
  IconCheckboxCircleFill,
  IconErrorWarningFill,
  IconCloseCircleFill,
} from "birdpaper-icon";
import { computed, ref, useSlots } from "vue";

defineOptions({ name: "Alert" });
const { clsBlockName } = useNamespace("alert");

const props: AlertProps = defineProps(alertProps);
const slots = useSlots();

const cls = computed(() => [
  clsBlockName.value,
  `${clsBlockName.value}-${props.status}`,
  { [`${clsBlockName.value}-hide-border`]: props.hideBorder },
]);

const statusIcon = {
  info: IconInformationFill,
  success: IconCheckboxCircleFill,
  warning: IconErrorWarningFill,
  danger: IconCloseCircleFill,
};
const icon = computed(() => {
  if (props.icon) return props.icon;
  return statusIcon[props.status];
});

const emits = defineEmits(["close"]);
const visible = ref(true);
const handleClose = () => {
  visible.value = false;
  emits("close");
};
</script>
