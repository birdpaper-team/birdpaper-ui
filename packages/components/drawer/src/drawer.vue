<template>
  <teleport to="body">
    <Transition name="modal-fade">
      <div v-show="model" :class="`${clsBlockName}-wrapper`" :style="{ zIndex: currentZIndex }" @click="handleMaskClick"></div>
    </Transition>

    <Transition :name="`slide-${placement}`">
      <div
        ref="drawerRef"
        v-show="model"
        :class="[`${clsBlockName}`, `${clsBlockName}-${placement}`, { 'drawer-show-border': border }]"
        :style="drawerStyle"
        role="dialog"
        aria-modal="true"
        :aria-label="title || undefined"
      >
        <div :class="`${clsBlockName}-header`">
          <slot name="header">
            <span :class="`${clsBlockName}-header-title`">{{ title }}</span>
          </slot>
          <button
            v-if="!hideClose"
            type="button"
            :class="`${clsBlockName}-header-close`"
            aria-label="Close"
            @click="handleClose"
          >
            <IconCloseFill size="20" />
          </button>
        </div>

        <div :class="`${clsBlockName}-body`">
          <slot />
        </div>

        <div v-if="!hideFooter" :class="`${clsBlockName}-footer`">
          <slot name="footer">
            <bp-button @click="handleCancel" status="gray" type="secondary">{{ cancelText }}</bp-button>
            <bp-button status="primary" type="normal" :loading="okLoading" @click="handleConfirm">
              {{ okText }}
            </bp-button>
          </slot>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">
import { useNamespace, useModalZIndex, popupZIndexKey } from "@birdpaper-ui/hooks";
import { DrawerProps, drawerProps } from "./props";
import { useScrollLock, onKeyStroke } from "@vueuse/core";
import { computed, onUnmounted, onMounted, provide, ref, watch, Transition } from "vue";
import { IconCloseFill } from "birdpaper-icon";
import BpButton from "@birdpaper-ui/components/button";

defineOptions({ name: "Drawer" });
const { clsBlockName } = useNamespace("drawer");
const { currentZIndex, increase, decrease, isTopLayer } = useModalZIndex();

const model = defineModel<boolean>({ type: Boolean, default: false });
const props: DrawerProps = defineProps(drawerProps);
const emit = defineEmits(["cancel", "confirm"]);

const drawerRef = ref(null);
provide(popupZIndexKey, computed(() => currentZIndex.value + 2));
const isScrollLocked = typeof document !== "undefined" ? useScrollLock(document.body) : ref(false);
let layerActive = false;

const applyOpenState = (value: boolean) => {
  isScrollLocked.value = value;
  if (value && !layerActive) {
    increase();
    layerActive = true;
  } else if (!value && layerActive) {
    decrease();
    layerActive = false;
  }
};

onMounted(() => {
  applyOpenState(!!model.value);
});

onUnmounted(() => {
  if (layerActive) {
    isScrollLocked.value = false;
    decrease();
    layerActive = false;
  }
});

onKeyStroke("Escape", (e) => {
  if (!model.value || !layerActive || !isTopLayer()) return;
  e.preventDefault();
  handleCancel();
});

const handleMaskClick = () => {
  if (!props.maskClosable) return;
  return handleCancel();
};

const drawerStyle = computed(() => {
  const baseStyle =
    props.placement === "up" || props.placement === "down"
      ? { height: typeof props.height === "number" ? `${props.height}px` : props.height }
      : { width: typeof props.width === "number" ? `${props.width}px` : props.width };
  return {
    ...baseStyle,
    zIndex: currentZIndex.value + 1,
  };
});

const handleClose = () => {
  model.value = false;
};

const handleCancel = () => {
  model.value = false;
  emit("cancel");
};

const okLoading = ref<boolean>(false);
const handleConfirm = async () => {
  if (!props.onBeforeOk) {
    model.value = false;
    return emit("confirm");
  }

  try {
    okLoading.value = true;
    const canClose = await props.onBeforeOk();
    if (canClose) {
      model.value = false;
      emit("confirm");
    }
  } catch (error) {
    console.warn("[ Drawer - onBeforeOk error]", error);
  } finally {
    okLoading.value = false;
  }
};

watch(model, (value) => applyOpenState(!!value));
</script>
