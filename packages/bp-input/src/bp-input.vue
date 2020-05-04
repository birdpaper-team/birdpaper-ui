/*
 * @Author: Sam
 * @Date: 2019-11-07 14:05:54
 * @Last Modified by: Sam
 * @Last Modified time: 2020-05-04 22:54:23
 */
<template>
  <div :class="inputClassName" v-click-outside="handleClickOutside">
    <!-- 普通文本类型 -->
    <template v-if="type != 'textarea'">
      <input
        ref="inp"
        class="bp-input-inner"
        spellcheck="false"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="'new-password'"
        :name="name"
        :maxlength="maxLength"
        :disabled="disabled"
        :readonly="readonly"
        v-model="inputValue"
        @input="handelInput"
        @focus="handelFocus"
        @blur="handelBlur"
      />
      <!-- 右侧区域 -->
      <div class="bp-input-right" v-if="!disabled && !readonly">
        <transition name="bp-fade-in">
          <!-- 密码显示/隐藏按钮 -->
          <span
            v-if="type == 'password' && inputValue != '' && showRightIcon"
            @click="handleShowPassword"
          >
            <i :class="[showPassword ? 'ri-eye-fill' : 'ri-eye-line']"></i>
          </span>
          <!-- 清空按钮 -->
          <span
            v-if="type == 'text' && inputValue != '' && showRightIcon && !showLimit"
            @click="handelClear"
          >
            <i class="ri-close-circle-fill"></i>
          </span>
          <!-- 字数限制 -->
          <span v-if="showLimit && maxLength != ''">{{inputValue.length}}/{{maxLength}}</span>
        </transition>
      </div>
    </template>
    <!-- 多行文本 -->
    <template v-else>
      <textarea
        ref="inp"
        spellcheck="false"
        :name="name"
        :class="['bp-textarea-inner',resize ? '' : 'resize-none']"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        :maxlength="maxLength"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="handelInput"
        @focus="handelFocus"
        @blur="handelBlur"
      />
      <!-- 字数限制 -->
      <span
        class="bp-textarea-num-limit"
        v-if="showLimit && maxLength != ''"
      >{{inputValue.length}}/{{maxLength}}</span>
    </template>
  </div>
</template>

<script>
import { clickOutside } from "../../utils/util";
export default {
  name: "bp-input",
  props: {
    // 输入框文本值
    value: {
      type: [String, Number],
      default: ""
    },
    // 占位文本
    placeholder: {
      type: String,
      default: ""
    },
    // 输入框类型
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        return ["text", "password", "textarea"].indexOf(value) !== -1;
      }
    },
    // 输入框尺寸
    size: {
      type: String,
      default: "normal",
      validator: function(value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否设置为只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 输入框 name 标识
    name: {
      type: String,
      default: ""
    },
    // 是否展示字数限制
    showLimit: {
      type: Boolean,
      default: false
    },
    // 最大输入长度
    maxLength: {
      type: [Number, String],
      default: ""
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "default",
      validator: function(value) {
        return (
          ["default", "primary", "success", "warning", "danger"].indexOf(
            value
          ) !== -1
        );
      }
    },
    // 多行文本下高度是否自动撑开
    autosize: {
      type: Boolean,
      default: false
    },
    // 多行文本下是否允许拖动
    resize: {
      type: Boolean,
      default: false
    },
    // 多行文本的行数
    rows: {
      type: [Number, String],
      default: 2
    }
  },
  directives: { clickOutside },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      showPassword: false,
      showRightIcon: false
    };
  },
  computed: {
    // 输入框类名
    inputClassName() {
      let className = ["bp-input"];
      if (this.borderColor != "default") {
        className.push(`bp-border-${this.borderColor}`);
      }
      if (this.isFocus) {
        className.push("focus-border");
      }
      if (this.type != "textarea") {
        className.push(`bp-input-${this.size}`);
      }
      return className;
    }
  },
  methods: {
    // 输入触发
    handelInput(el) {
      this.$emit("input", this.inputValue);
      // 多行文本下操作
      if (this.type === "textarea" && this.autosize) {
        this.autoTextAreaHeight(el);
      }
    },
    // 获取焦点触发
    handelFocus(e) {
      this.$emit("focus", e);
      this.isFocus = true;
      this.showRightIcon = true;
    },
    // 失去焦点触发
    handelBlur(e) {
      this.$emit("blur", e);
      this.isFocus = false;
    },
    // 点击输入框外部触发
    handleClickOutside() {
      this.showRightIcon = false;
    },
    // 清空输入框触发
    handelClear() {
      this.inputValue = "";
      this.$emit("input", this.inputValue);
      this.$emit("clear", this.inputValue);
    },
    // 密码显示/隐藏
    handleShowPassword() {
      this.showPassword = !this.showPassword;
      this.showPassword
        ? (this.$refs.inp.type = "text")
        : (this.$refs.inp.type = "password");
    },
    // 多行文本高度自动撑开
    autoTextAreaHeight(el) {
      // 设置高度
      el.target.style.height = `${el.target.scrollTop +
        el.target.scrollHeight}px`;
    }
  },
  watch: {
    value() {
      this.inputValue = this.value;
    }
  }
};
</script>

<style lang="less">
@import "./bp-input";
</style>