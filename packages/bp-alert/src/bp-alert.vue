/*
 * @Author: Sam
 * @Date: 2020-04-28 11:05:14
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-20 08:43:33
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
import { computed, reactive, ref, toRefs, watch } from "vue";
export default {
  name: "bp-alert",
  props: {
    // 提示框显示/隐藏
    modelValue: { type: Boolean, default: false },
    // 标题
    title: { type: String, default: "" },
    // 是否显示 Icon
    showIcon: { type: Boolean, default: false },
    // 是否采用明亮主题
    light: { type: Boolean, default: false },
    // 是否可关闭
    closeable: { type: Boolean, default: true },
    // 自定义关闭文本
    closeText: { type: String, default: "" },
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
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      visible: false,
    });

    // 图标类型映射
    const iconType = ref({
      primary: "ri-information-fill",
      success: "ri-checkbox-circle-fill",
      warning: "ri-error-warning-fill",
      danger: "ri-close-circle-fill",
    });

    // 显示提示框
    const onOpen = () => {
      if (state.visible) return;
      state.visible = true;
    };

    // 关闭提示框
    const onClose = function () {
      if (!state.visible) return;
      emit("update:modelValue", false);
    };

    // 外层样式
    const alertClassName = computed(() => {
      let className = ["bp-alert-content"];
      let typeName = "";
      props.light
        ? (typeName = `alert-${props.type}-light`)
        : (typeName = `alert-${props.type}`);
      className.push(typeName);
      return className;
    });

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
      iconType,
      alertClassName,
    };
  },
};
</script>