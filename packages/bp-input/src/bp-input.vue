/*
 * @Author: Sam
 * @Date: 2019-11-07 14:05:54
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-19 21:13:20
 */
<template>
  <div :class="[isFocus ? 'focus-border' : '', 'bp-input']">
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
        :disabled="disabled"
        :readonly="readonly"
        v-model="inputValue"
        @input="handelInput"
        @focus="handelFocus"
        @blur="handelBlur"
      />
      <!-- 右侧区域 -->
      <div class="bp-input-right">
        <transition name="bp-fade-in">
          <!-- 密码显示/隐藏按钮 -->
          <span v-if="type == 'password' && inputValue != '' && showRightIcon" @click="showPassword">
            <i :class="['text-minor', showPassword ? 'ri-eye-fill' : 'ri-eye-line']"></i>
          </span>
          <!-- 清空按钮 -->
          <span v-if="type == 'text' && inputValue != '' && showRightIcon" @click="handelClear">
            <i class="text-minor ri-close-circle-fill"></i>
          </span>
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
        :placeholder="placeholder"
        v-model="inputValue"
        @input="handelInput"
        @focus="handelFocus"
        @blur="handelBlur"
      />
    </template>
  </div>
</template>

<script>
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
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      showPassword: false,
      showRightIcon: false
    };
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
      this.showRightIcon = false;
    },
    // 清空输入框触发
    handelClear() {
      this.inputValue = "";
      this.$emit("input", this.inputValue);
      this.$emit("clear", this.inputValue);
    },
    // 密码显示/隐藏
    showPassword() {
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
  watch:{
    value(){
      this.inputValue = this.value;
    }
  }
};
</script>

<style lang="less">
@import "./bp-input";
</style>