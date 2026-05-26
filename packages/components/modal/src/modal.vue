<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-show="model" :class="`${clsBlockName}-wrapper`" @click="handleMaskClick"></div>
    </transition>

    <transition name="modal-zoom">
      <div ref="modalRef" v-show="model" :class="`${clsBlockName}-container`">
        <div
          :class="[
            `${clsBlockName}`,
            { 'is-fullscreen': fullscreen },
            { 'is-center': center },
            { 'modal-show-border': showBorder },
          ]"
          :style="modalStyle"
        >
          <div class="modal-inner">
            <div :class="`${clsBlockName}-header`" v-if="!hideHeader && title">
              <slot name="header">
                <span :class="`${clsBlockName}-header-title`">
                  <component
                    v-if="type && !hideTitleIcon"
                    :is="iconType[type]"
                    :class="`icon-${type}`"
                    size="18px"
                  ></component>
                  {{ title }}
                </span>
              </slot>

              <div v-if="!hideClose" :class="`${clsBlockName}-header-close`" @click="handleClose">
                <IconCloseFill size="20" />
              </div>
            </div>

            <div :class="[`${clsBlockName}-body`, bodyClass]">
              <slot>
                {{ content }}
              </slot>
            </div>

            <div v-if="!hideFooter" :class="`${clsBlockName}-footer`">
              <slot name="footer">
                <bp-button v-if="!hideCancel" v-bind="cancelBtnProps" @click="handleCancel">
                  {{ cancelText }}
                </bp-button>
                <bp-button v-bind="okBtnProps" :loading="okLoading" @click="handleConfirm">
                  {{ okText }}
                </bp-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import BpButton from "@birdpaper-ui/components/button";
import { computed, ref, watch, onMounted, reactive } from "vue";
import { ModalProps, modalProps } from "./props";
import { useScrollLock } from "@vueuse/core";
import {
  IconCloseFill,
  IconCheckboxCircleFill,
  IconCloseCircleFill,
  IconErrorWarningFill,
  IconInformationFill,
} from "birdpaper-icon";

defineOptions({ name: "Modal" });
const { clsBlockName } = useNamespace("modal");

const model = defineModel({ default: false });
const props: ModalProps = defineProps(modalProps);
const emit = defineEmits(["cancel", "confirm"]);

const modalRef = ref(null);
const modalInstance = reactive({
  isScrollLocked: ref(),
});

onMounted(() => {
  modalInstance.isScrollLocked = useScrollLock(() => window.document.body);

  if (props.isMethod) {
    model.value = true;
  }
});

const iconType = {
  success: IconCheckboxCircleFill,
  error: IconCloseCircleFill,
  warning: IconErrorWarningFill,
  info: IconInformationFill,
  confirm: IconErrorWarningFill,
};

const handleMaskClick = () => {
  if (!props.maskClosable) return;
  return handleCancel();
};

const modalStyle = computed(() => ({
  width: typeof props.width === "number" ? `${props.width}px` : props.width,
  marginTop: props.fullscreen ? 0 : props.top,
  marginBottom: props.fullscreen ? 0 : props.bottom,
  borderRadius: props.fullscreen ? 0 : props.borderRadius,
}));

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
    console.log("[ Modal - onBeforeOk error]", error);
  } finally {
    okLoading.value = false;
  }
};

watch(model, (value) => {
  modalInstance.isScrollLocked = value;
});
</script>
