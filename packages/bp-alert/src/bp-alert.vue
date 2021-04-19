/*
 * @Author: Sam
 * @Date: 2020-04-28 11:05:14
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-19 15:15:19
 */
<template>
  <div class="bp-alert" v-if="visible">
    <!-- 提示框内容 -->
    <div :class="alertClassName">
      <!-- 提示框头部 -->
      <div class="bp-alert-header">
        <p class="bp-alert-header-title">
          <span :class="['icon', `${iconType[type]}`]" v-if="showIcon"></span>
          <!-- 标题 -->
          <span class="text" v-text="title"></span>
        </p>
        <!-- 关闭按钮 -->
        <p class="bp-alert-header-close" v-if="closeable" @click="onClose">
          <i class="ri-close-fill" v-if="closeText == ''"></i>
          <span v-if="closeText != ''">{{ closeText }}</span>
        </p>
      </div>
      <span v-if="$slots.default">
        <div class="bp-alert-description">
          <p class="bp-alert-description-content">
            <slot></slot>
          </p>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, reactive, ref, toRefs, watch } from "vue";
export default {
  name: "bp-alert",
  props: {
    // 对话框显示/隐藏
    modelValue: {
      type: Boolean,
      default: false,
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 是否显示 Icon
    showIcon: {
      type: Boolean,
      default: false,
    },
    // 提示框类型
    type: {
      type: String,
      default: "danger",
      validator: function (value) {
        return (
          ["primary", "success", "warning", "danger"].indexOf(value) !== -1
        );
      },
    },
    // 是否采用明亮主题
    light: {
      type: Boolean,
      default: false,
    },
    // 是否可关闭
    closeable: {
      type: Boolean,
      default: true,
    },
    // 自定义关闭文本
    closeText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      iconType: {
        primary: "ri-information-fill",
        success: "ri-checkbox-circle-fill",
        warning: "ri-error-warning-fill",
        danger: "ri-close-circle-fill",
      },
    };
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      visible: false,
    });

    const onOpen = () => {
      if (state.visible) return;
      state.visible = true;
    };

    const onClose = function () {
      if (!state.visible) return;
      setTimeout(() => {
        emit("update:modelValue", false);
      }, 10);
    };

    watch(
      () => props.modelValue,
      (val) => {
        val ? onOpen() : (state.visible = false);
      },
      {
        immediate: true,
      }
    );

    return {
      ...toRefs(state),
      onClose,
    };
  },
  computed: {
    // 提示框类名
    alertClassName() {
      let className = ["bp-alert-content"];
      let typeName = "";
      this.light
        ? (typeName = `alert-${this.type}-light`)
        : (typeName = `alert-${this.type}`);
      className.push(typeName);
      return className;
    },
  },
};
</script>