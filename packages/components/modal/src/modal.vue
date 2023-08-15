<template>
  <teleport to="body">
    <div :class="`${name}-container`" v-show="containerVisable">
      <Transition name="fade-modal-mask">
        <div :class="`${name}-mask`" v-show="modelValue"></div>
      </Transition>

      <Transition name="modal-fade">
        <div :class="`${name}-wrapper`" v-show="modelValue" @click.self="handleMaskClick">
          <div :class="cls" :style="`width:${width};top:${top}`">
            <div :class="`${name}-header`">
              <p :class="`${name}-header-title`">{{ title }}</p>
              <i v-if="!hideClose" :class="`${name}-header-close`" class="ri-close-line" @click="handleCancle"></i>
            </div>
            <div :class="`${name}-body`">
              <slot></slot>
            </div>
            <div :class="`${name}-footer`" v-if="!hideFooter">
              <bp-space justify="flex-end" size="small" v-if="!slots.footer">
                <bp-button type="plain" @click="handleCancle">{{ cancleText }}</bp-button>
                <bp-button @click="handleOk" :loading="confirmLoading || okLoading" type="primary" status="primary">
                  {{ okText }}
                </bp-button>
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
import { defineComponent } from "vue";
import { computed, ref, watch } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    /** 对话框显示状态 */
    modelValue: { type: Boolean, default: false },
    /** 对话框标题 */
    title: { type: String, default: "标题" },
    /** 标题对齐方式 */
    titleAlign: { type: String, default: "left" },
    /** 对话框宽度 */
    width: { type: String, default: "600px" },
    /** 对话框宽度 */
    top: { type: String, default: "20vh" },
    /** 是否隐藏底部区域 */
    hideFooter: { type: Boolean, default: false },
    /** 是否隐藏关闭图标 */
    hideClose: { type: Boolean, default: false },
    /** 是否展示边框 */
    border: { type: Boolean, default: false },
    /** 点击遮罩是否关闭 */
    maskClosable: { type: Boolean, default: true },
    /** 确认按钮是否处于加载状态 */
    okLoading: { type: Boolean, default: false },
    /** 确定按钮内容 */
    okText: { type: String, default: "确认" },
    /** 取消按钮内容 */
    cancleText: { type: String, default: "取消" },
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true },
  },
  emits: ["update:modelValue", "ok", "cancle"],
  setup(props, { emit, slots }) {
    const name = "bp-modal";
    const containerVisable = ref<boolean>(false);

    const cls = computed(() => {
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
      emit("cancle");
      emit("update:modelValue", false);
    };

    const confirmLoading = ref<boolean>(false);
    const handleOk = async () => {
      try {
        confirmLoading.value = true;
        const res = await props.onBeforeOk();
        if (!res) return;

        emit("ok");
        emit("update:modelValue", false);
      } catch (error) {
        console.log("[ Modal -onBeforeOk error]", error);
      } finally {
        confirmLoading.value = false;
      }
    };

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
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
      confirmLoading,
      containerVisable,
      handleMaskClick,
      handleCancle,
      handleOk,
      slots,
    };
  },
});
</script>
