<template>
  <teleport to="body">
    <div :class="`${name}-mask`" v-show="visible"></div>

    <div :class="`${name}-wrapper`" v-show="visible">
      <div :class="`${name}`">
        <div :class="`${name}-header`">
          <p :class="`${name}-header-title`">{{ title }}</p>
          <i :class="`${name}-header-close`" class="ri-close-line" @click="handleCancle"></i>
        </div>
        <div :class="`${name}-body`">
          <slot></slot>
        </div>
        <div :class="`${name}-footer`">
          <bp-space justify="flex-end">
            <bp-button @cilik="handleCancle">取消</bp-button>
            <bp-button @click="handleOk" type="primary" status="primary">确认</bp-button>
          </bp-space>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Modal">
const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: "标题" },
});
const emits = defineEmits<{
  ok: [];
  cancle: [];
  "update:visible": [visible: boolean];
}>();

const name = "bp-modal";

const handleCancle = () => {
  emits("cancle");
  emits("update:visible", false);
};

const handleOk = () => {
  emits("ok");
  emits("update:visible", false);
};
</script>
