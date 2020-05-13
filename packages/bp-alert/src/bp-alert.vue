/*
 * @Author: Sam
 * @Date: 2020-04-28 11:05:14
 * @Last Modified by: Sam
 * @Last Modified time: 2020-05-12 16:25:29
 */
<template>
  <div class="bp-alert" v-if="show">
    <!-- 提示框内容 -->
    <div :class="alertClassName">
      <!-- 提示框头部 -->
      <div class="bp-alert-header">
        <!-- 标题 -->
        <p class="bp-alert-header-title">{{title}}</p>
        <!-- 关闭按钮 -->
        <p class="bp-alert-header-close" v-if="closeable" @click="handleClose">
          <i class="ri-close-fill" v-if="closeText == ''"></i>
          <span v-if="closeText != ''">{{closeText}}</span>
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
export default {
  name: "bp-alert",
  props: {
    // 提示框显示/隐藏，支持.sync修饰符
    visible: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 提示框类型
    type: {
      type: String,
      default: "danger",
      validator: function(value) {
        return (
          ["primary", "success", "warning", "danger"].indexOf(value) !== -1
        );
      }
    },
    // 是否采用明亮主题
    light: {
      type: Boolean,
      default: false
    },
    // 是否可关闭
    closeable: {
      type: Boolean,
      default: true
    },
    // 自定义关闭文本
    closeText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false // 提示框显示/隐藏
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
    }
  },
  methods: {
    // 关闭提示框
    handleClose() {
      this.$emit("close");
      this.show = false;
      this.$emit("update:visible", false);
    }
  },
  watch: {
    visible: {
      handler: function(oldValue, newValue) {
        // 关闭处理，先关闭遮罩，后关闭对话框
        if (!this.visible) {
          this.$emit("update:visible", false);
          return;
        }
        this.show = this.visible;
      },
      immediate: true
    }
  }
};
</script>

<style lang="less">
@import url("./bp-alert.less");
</style>