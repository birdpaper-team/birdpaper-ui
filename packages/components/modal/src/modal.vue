<template>
  <teleport to="body">
    <Transition name="fade-modal-mask">
      <div :class="`${name}-mask`" v-show="visible"></div>
    </Transition>

    <Transition name="modal-fade">
      <div :class="`${name}-wrapper`" v-show="visible">
        <div :class="`${name}`" :style="`width:${width};top:${top}`">
          <div :class="`${name}-header`">
            <p :class="`${name}-header-title`">{{ title }}</p>
            <i :class="`${name}-header-close`" class="ri-close-line" @click="handleCancle"></i>
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
  </teleport>
</template>

<script setup lang="ts" name="Modal">
import { useSlots } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
  hideFooter: { type: Boolean, default: false },
  title: { type: String, default: "标题" },
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

const handleCancle = () => {
  emits("cancle");
  emits("update:visible", false);
};

const handleOk = () => {
  emits("ok");
  emits("update:visible", false);
};
</script>
