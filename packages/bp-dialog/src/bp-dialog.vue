/*
 * @Author: Sam
 * @Date: 2020-04-01 15:06:27
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-03 09:29:42
 */
<template>
  <transition name="bp-dialog-fade">
    <div class="bp-wapper" v-if="show">
      <!-- 遮罩层 -->
      <bp-mask :show="maskShow"></bp-mask>
      <div
        class="bp-dialog"
        :style="`width:${width};margin-top:${top}`"
        v-click-outside="handleClickOutside"
      >
        <!-- 头部 -->
        <div class="header">
          <!-- 标题 -->
          <div class="title">
            <p v-text="title"></p>
          </div>
          <!-- 操作项 -->
          <div class="option">
            <i class="ri-close-line" @click="closeDialog"></i>
          </div>
        </div>
        <!-- Dialog 内容 -->
        <div class="content">
          <slot></slot>
        </div>
        <!-- 底部区域 -->
        <div class="footer">
          <slot name="footer">
            <bp-button type="default" @click="handleCancel">取 消</bp-button>
            <bp-button type="primary" @click="handleConfirm">确 定</bp-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { clickOutside } from "../../utils/util";
export default {
  name: "bp-dialog",
  props: {
    // 对话框显示/隐藏，支持.sync修饰符
    visible: {
      type: Boolean,
      default: false
    },
    // 对话框标题栏文案
    title: {
      type: String,
      default: "提示"
    },
    // 对话框宽度
    width: {
      type: String,
      default: "30%"
    },
    // 对话框距离顶部的距离
    top: {
      type: String,
      default: "15vh"
    },
    // 是否挂在到body
    appendToBody: {
      type: Boolean,
      default: false
    },
    // 是否锁定背景滚动
    lockScroll: {
      type: Boolean,
      default: true
    },
    // 是否点击遮罩关闭对话框
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    // 是否开启ESC按键关闭
    closeOnPressEscape: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false, // 对话框显示/隐藏
      maskShow: false, // 遮罩显示/隐藏
      dialogLock: true // 对话框关闭锁，默认打开，为 false 时允许关闭
    };
  },
  directives: { clickOutside },
  mounted() {
    // 挂载到 Body
    if (this.appendToBody) {
      this.$nextTick(() => {
        const body = document.querySelector("body");
        body.append ? body.append(this.$el) : body.appendChild(this.$el);
      });
    }
    // 添加键盘Esc事件
    if (this.closeOnPressEscape) {
      this.$nextTick(() => {
        document.addEventListener("keyup", e => {
          if (e.keyCode == 27) {
            this.closeDialog(); //事件名
          }
        });
      });
    }
  },
  methods: {
    // 点击遮罩处理
    handleClickOutside(el) {
      // 未配置点击遮罩关闭
      if (!this.closeOnClickMask) {
        return;
      }
      // 对话框未显示或者关闭锁处于开启状态
      if (!this.visible || this.dialogLock) {
        return;
      }
      this.closeDialog();
    },
    // 确认操作
    handleConfirm() {
      this.$emit("confirm");
    },
    // 关闭对话框
    closeDialog() {
      this.updateVisible(false);
      this.$emit("close");
    },
    // 取消操作
    handleCancel() {
      this.updateVisible(false);
      this.$emit("cancel");
    },
    // 关闭或取消，更新 visible 状态
    updateVisible(visible) {
      this.maskShow = false;
      // 加入 10ms 延迟，以解决移除 Dom 后遮罩层停留问题
      setTimeout(() => {
        this.show = visible;
        this.$emit("update:visible", visible);
      }, 10);
    }
  },
  watch: {
    show() {
      // Body 滚动条处理
      if (this.lockScroll) {
        this.visible
          ? (document.getElementsByTagName("body")[0].className =
              "bp-overflow-hidden")
          : document.body.removeAttribute("class", "bp-overflow-hidden");
      }

      // 显示遮罩和延迟关闭对话框的关闭锁
      if (this.visible) {
        setTimeout(() => {
          this.maskShow = true;
        }, 10);
        setTimeout(() => {
          this.dialogLock = false;
        }, 100);
        return;
      }

      // 对话框关闭，将关闭锁恢复为开启状态
      this.dialogLock = true;
    },
    visible() {
      // 关闭处理，先关闭遮罩，后关闭对话框
      if (!this.visible) {
        this.updateVisible(false);
        return;
      }
      this.show = this.visible;
    }
  }
};
</script>

<style lang="less">
@import "./bp-dialog";
</style>