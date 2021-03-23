/*
 * @Author: Sam
 * @Date: 2020-04-01 15:06:27
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-22 20:23:27
 */
<template>
  <bp-mask v-model="maskShow"></bp-mask>
  <transition name="bp-dialog-fade">
    <!-- 遮罩层 -->
    <div class="bp-wapper" v-if="visible">
      <div
        class="bp-dialog"
        v-click-outside="onClickOutside"
        :style="`width:${modalWidth};margin-top:${top}`"
      >
        <!-- 头部 -->
        <div class="header">
          <slot name="header">
            <!-- 标题 -->
            <div class="title">
              <p v-text="title"></p>
            </div>
            <!-- 操作项 -->
            <div class="option">
              <i class="ri-close-fill" @click="onClose"></i>
            </div>
          </slot>
        </div>
        <!-- Dialog 内容 -->
        <div class="content">
          <slot></slot>
        </div>
        <!-- 底部区域 -->
        <div class="footer" v-if="!noFooter">
          <slot name="footer">
            <bp-button type="default" @click="onCancel"> 取消 </bp-button>
            <bp-button @click="onConfirm"> 确定 </bp-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { nextTick, onMounted, reactive, ref, toRefs, watch } from "vue";
import { useEquipment } from "../../use/equipment";
import { clickOutside } from "../../utils/util.js";
export default {
  name: "bp-dialog",
  directives: { clickOutside },
  props: {
    // 对话框显示/隐藏，支持.sync修饰符
    modelValue: {
      type: Boolean,
      default: false,
    },
    // 对话框标题栏文案
    title: {
      type: String,
      default: "提示",
    },
    // 对话框宽度
    width: {
      type: String,
      default: "35%",
    },
    // 对话框距离顶部的距离
    top: {
      type: String,
      default: "15vh",
    },
    // 不显示底部操作区域
    noFooter: {
      type: Boolean,
      default: false,
    },
    // 是否锁定背景滚动
    lockScroll: {
      type: Boolean,
      default: true,
    },
    // 是否点击遮罩关闭对话框
    closeOnClickMask: {
      type: Boolean,
      default: true,
    },
    // 是否开启ESC按键关闭
    closeOnPressEscape: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["confirm", "cancel", "update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      visible: false,
      maskShow: false, // 遮罩显示/隐藏
      dialogLock: true, // 对话框关闭锁，默认打开，为 false 时允许关闭
    });

    // // 添加键盘Esc事件
    if (props.closeOnPressEscape) {
      document.addEventListener("keyup", (e) => {
        if (e.keyCode == 27) {
          onClose();
        }
      });
    }

    const modalWidth = ref("");
    const { isMobile } = useEquipment();
    const getWidth = () => {
      modalWidth.value = isMobile() ? "90%" : props.width;
    };
    onMounted(() => {
      getWidth();
      nextTick(() => {
        window.addEventListener("resize", () => getWidth(), false);
      });
    });

    // 确认操作
    const onConfirm = () => {
      emit("confirm");
    };

    // 弹出对话框
    const onOpen = () => {
      if (state.visible) return;
      state.visible = true;
      state.maskShow = true;
      setTimeout(() => {
        state.dialogLock = false;
      }, 200);
    };

    // 关闭对话框
    const onClose = function () {
      if (!state.visible) return;
      state.maskShow = false;
      setTimeout(() => {
        emit("update:modelValue", false);
      }, 10);
      setTimeout(() => {
        state.dialogLock = true;
      }, 200);
    };

    // 取消操作
    const onCancel = () => {
      onClose();
      setTimeout(() => {
        emit("cancel");
      }, 200);
    };

    watch(
      () => props.modelValue,
      (val) => {
        val
          ? onOpen()
          : ((state.visible = false),
            (state.maskShow = false),
            (state.dialogLock = true));
        // Body 滚动条处理
        if (props.lockScroll) {
          props.modelValue
            ? (document.getElementsByTagName("body")[0].className =
                "bp-overflow-hidden")
            : document.body.removeAttribute("class", "bp-overflow-hidden");
        }
      }
    );

    // 点击外部触发
    const onClickOutside = () => {
      if (!props.closeOnClickMask || state.dialogLock) return;
      onClose();
    };

    return {
      ...toRefs(state),
      modalWidth,
      onConfirm,
      onClose,
      onCancel,
      onClickOutside,
    };
  },
};
</script>