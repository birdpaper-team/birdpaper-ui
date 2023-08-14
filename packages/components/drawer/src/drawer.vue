<template>
  <teleport to="body">
    <div :class="`${name}-container`" v-show="containerVisable">
      <Transition name="fade-modal-mask">
        <div :class="`${name}-mask`" v-show="visible"></div>
      </Transition>

      <Transition name="drawer-fade">
        <div :class="`${name}-wrapper`" v-show="visible" @click.self="handleMaskClick">
          <div :class="cls" :style="`width:${width};`">
            <div :class="`${name}-header`">
              <p :class="`${name}-header-title`">{{ title }}</p>
              <i v-if="!hideClose" :class="`${name}-header-close`" class="ri-close-line" @click="handleCancle"></i>
            </div>
            <div :class="`${name}-body`">
              <slot></slot>
            </div>
            <div :class="`${name}-footer`" v-if="!hideFooter">
              <bp-space justify="flex-end" size="small" v-if="!slots.footer">
                <bp-button type="plain" @click="handleCancle">取消</bp-button>
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

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Drawer",
  props: {
    visible: { type: Boolean, default: false },
    /** 抽屉标题 */
    title: { type: String, default: "标题" },
    /** 标题对齐方式 */
    titleAlign: { type: String, default: "left" },
    /** 抽屉宽度 */
    width: { type: String, default: "400px" },
    /** 是否隐藏底部区域 */
    hideFooter: { type: Boolean, default: false },
    /** 是否隐藏关闭图标 */
    hideClose: { type: Boolean, default: false },
    /** 点击遮罩是否关闭 */
    maskClosable: { type: Boolean, default: true },
  },
  emits: ["update:visible", "ok", "cancle"],
  setup(props, { emit, slots }) {
    const name = "bp-drawer";
    const containerVisable = ref<boolean>(false);

    const cls = computed(() => {
      let cls = [name];
      cls.push(`${name}-title-${props.titleAlign}`);
      return cls;
    });

    /** 点击遮罩触发 */
    const handleMaskClick = () => {
      if (!props.maskClosable) return;

      handleCancle();
    };

    const handleCancle = () => {
      emit("cancle");
      emit("update:visible", false);
    };

    const handleOk = () => {
      emit("ok");
      emit("update:visible", false);
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

    return {
      name,
      cls,
      containerVisable,
      handleMaskClick,
      handleCancle,
      handleOk,
      slots,
    };
  },
});
</script>
