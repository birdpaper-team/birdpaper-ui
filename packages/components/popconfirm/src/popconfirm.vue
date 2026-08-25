<template>
  <bp-trigger v-model="model" :position :popup-offset="10" update-at-scroll>
    <div :class="`${clsBlockName}-slot`">
      <slot></slot>
    </div>

    <template #content>
      <div :class="`${clsBlockName}-inner`">
        <div :class="`${clsBlockName}-inner-content`">
          <span :class="`${clsBlockName}-icon`">
            <component :is="iconType[type]" size="18px"></component>
          </span>
          <span :class="`${clsBlockName}-text`">
            {{ content }}
          </span>
        </div>

        <div :class="`${clsBlockName}-footer`">
          <bp-button @click="handleCancel" size="mini" status="gray" type="plain">{{ displayCancelText }}</bp-button>
          <bp-button @click="handleOk" :loading="okLoading" size="mini" type="normal" :status="btnStatus[type]">
            {{ displayOkText }}
          </bp-button>
        </div>
      </div>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import BpButton from "@birdpaper-ui/components/button";
import { useNamespace, useLocale } from "@birdpaper-ui/hooks";
import { PopconfirmProps, popconfirmProps } from "./props";
import type { PopconfirmType } from "./types";
import type { ButtonStatus } from "@birdpaper-ui/components/button/src/types";
import { IconCheckboxCircleFill, IconCloseCircleFill, IconErrorWarningFill, IconInformationFill } from "birdpaper-icon";
import { computed, ref } from "vue";

defineOptions({ name: "Popconfirm" });
const { clsBlockName } = useNamespace("popconfirm");
const { messages } = useLocale();

const model = defineModel<boolean>({ default: false });
const props: PopconfirmProps = defineProps(popconfirmProps);
const emit = defineEmits(["cancel", "ok"]);

const displayOkText = computed(() => props.okText || messages.value.popconfirm.ok);
const displayCancelText = computed(() => props.cancelText || messages.value.popconfirm.cancel);

const iconType = {
  info: IconInformationFill,
  success: IconCheckboxCircleFill,
  error: IconCloseCircleFill,
  warning: IconErrorWarningFill,
};
const btnStatus: Record<PopconfirmType, ButtonStatus> = {
  info: "primary",
  success: "success",
  error: "danger",
  warning: "warning",
};

const handleCancel = () => {
  model.value = false;
  emit("cancel");
};

const okLoading = ref<boolean>(false);
const handleOk = async () => {
  if (!props.onBeforeOk) {
    model.value = false;
    return emit("ok");
  }

  try {
    okLoading.value = true;
    const canClose = await props.onBeforeOk();
    if (canClose) {
      model.value = false;
      emit("ok");
    }
  } catch (error) {
    console.warn("[ Popconfirm - onBeforeOk error]", error);
  } finally {
    okLoading.value = false;
  }
};
</script>
