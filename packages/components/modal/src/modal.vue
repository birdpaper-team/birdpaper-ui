<template>
  <teleport to="body">
    <div :class="`${name}-container`" v-show="containerVisable">
      <Transition name="fade-modal-mask">
        <div :class="`${name}-mask`" v-show="visible"></div>
      </Transition>

      <Transition name="modal-fade">
        <div :class="`${name}-wrapper`" v-show="visible" @click.self="handleMaskClick">
          <div :class="clsName" :style="`width:${width};top:${top}`">
            <div :class="`${name}-header`">
              <p :class="`${name}-header-title`">{{ title }}</p>
              <i v-if="!hideClose" :class="`${name}-header-close`" class="ri-close-line" @click="handleCancle"></i>
            </div>
            <div :class="`${name}-body`">
              <slot></slot>
            </div>
            <div :class="`${name}-footer`" v-if="!hideFooter">
              <bp-space justify="flex-end" v-if="!slots.footer">
                <bp-button @click="handleCancle">取消</bp-button>
                <bp-button @click="handleOk" type="primary" status="primary">确认</bp-button>
              </bp-space>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Modal">
import { computed, ref, useSlots, watch } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
  hideFooter: { type: Boolean, default: false },
  hideClose: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
  maskClosable: { type: Boolean, default: true },
  title: { type: String, default: "标题" },
  titleAlign: { type: String, default: "left" },
  width: { type: String, default: "600px" },
  top: { type: String, default: "20vh" },
});
const emits = defineEmits<{
  ok: [];
  cancle: [];
  "update:visible": [visible: boolean];
}>();

const name = "bp-modal";
const slots = useSlots();
const containerVisable = ref<boolean>(false);

const clsName = computed(() => {
  let cls = [name];
  if (props.border) {
    cls.push(`${name}-border`);
  }
  cls.push(`${name}-title-${props.titleAlign}`);
  return cls;
});

/** 点击遮罩触发 */
const handleMaskClick = () => {
  if (!props.maskClosable) return;

  handleCancle();
};

const handleCancle = () => {
  emits("cancle");
  emits("update:visible", false);
};

const handleOk = () => {
  emits("ok");
  emits("update:visible", false);
};

watch(
  () => props.visible,
  () => {
    if (props.visible) {
      containerVisable.value = true;
      return;
    }

    setTimeout(() => {
      containerVisable.value = false;
    }, 200);
  }
);
</script>
