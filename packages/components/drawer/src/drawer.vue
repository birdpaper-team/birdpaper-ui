<template>
  <teleport to="body">
    <Transition name="modal-fade">
      <div v-show="model" :class="`${clsBlockName}-wrapper`" @click="handleMaskClick"></div>
    </Transition>

    <Transition :name="`slide-${placement}`">
      <div
        ref="drawerRef"
        v-show="model"
        :class="[`${clsBlockName}`, `${clsBlockName}-${placement}`]"
        :style="drawerStyle"
      >
        <div :class="`${clsBlockName}-header`">
          <slot name="header">
            <span :class="`${clsBlockName}-header-title`">{{ title }}</span>
          </slot>
          <IconCloseFill v-if="!hideClose" :class="`${clsBlockName}-header-close`" size="20" @click="handleClose" />
        </div>

        <div :class="`${clsBlockName}-body`">
          <slot />
        </div>

        <div v-if="!hideFooter" :class="`${clsBlockName}-footer`">
          <slot name="footer">
            <bp-button @click="handleCancel" status="gray" type="secondary">{{ cancleText }}</bp-button>
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
import { useNamespace } from "@birdpaper-ui/hooks";
import { DrawerProps, drawerProps } from "./props";
import { useScrollLock } from "@vueuse/core";
import { computed, onMounted, reactive, ref, watch, Transition } from "vue";

defineOptions({ name: "Drawer" });
const { clsBlockName } = useNamespace("drawer");

const model = defineModel<boolean>({ type: Boolean, required: true });
const props: DrawerProps = defineProps(drawerProps);
const emit = defineEmits(["cancel", "confirm"]);

const drawerRef = ref(null);
const drawerInstance = reactive({
  isScrollLocked: ref(),
});

onMounted(() => {
  drawerInstance.isScrollLocked = useScrollLock(() => window.document.body);
});

const handleMaskClick = () => {
  if (!props.maskClosable) return;
  return handleCancel();
};

const drawerStyle = computed(() => {
  if (props.placement === "up" || props.placement === "down") {
    return {
      height: typeof props.height === "number" ? `${props.height}px` : props.height,
    };
  }
  return {
    width: typeof props.width === "number" ? `${props.width}px` : props.width,
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
    console.log("[ Drawer - onBeforeOk error]", error);
  } finally {
    okLoading.value = false;
  }
};

watch(model, (value) => {
  drawerInstance.isScrollLocked = value;
});
</script>
