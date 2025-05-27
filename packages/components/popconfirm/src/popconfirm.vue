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
          <bp-button @click="handleCancle" size="mini" status="gray" type="plain">{{ cancelText }}</bp-button>
          <bp-button @click="handleOk" :loading="okLoading" size="mini" type="normal" :status="btnStatus[type]">
            {{ okText }}
          </bp-button>
        </div>
      </div>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { useNamespace } from "@birdpaper-ui/hooks";
import { PopconfirmProps, popconfirmProps } from "./props";
import { IconCheckboxCircleFill, IconCloseCircleFill, IconErrorWarningFill, IconInformationFill } from "birdpaper-icon";
import { ref } from "vue";

defineOptions({ name: "Popconfirm" });
const { clsBlockName } = useNamespace("popconfirm");

const model = ref<boolean>(false);
const props: PopconfirmProps = defineProps(popconfirmProps);
const emit = defineEmits(["cancle", "ok"]);

const iconType = {
  info: IconInformationFill,
  success: IconCheckboxCircleFill,
  error: IconCloseCircleFill,
  warning: IconErrorWarningFill,
};
const btnStatus = {
  info: "primary",
  success: "success",
  error: "danger",
  warning: "warning",
};

const handleCancle = () => {
  model.value = false;
  emit("cancle");
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
    console.log("[ Popconfirm - onBeforeOk error]", error);
  } finally {
    okLoading.value = false;
  }
};
</script>
