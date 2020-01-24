/*
 * @Author: Sam
 * @Date: 2019-11-07 14:05:54
 * @Last Modified by: Sam
 * @Last Modified time: 2019-12-26 14:57:12
 */
<template>
  <div :class="[is_focus ? 'focus-border' : '', 'bp-input']">
    <input
      ref="inp"
      :type="type"
      class="bp-input-inner"
      :placeholder="placeholder"
      :autocomplete="'off'"
      :name="name"
      v-model="input_value"
      @input="$emit('input', input_value)"
      @focus="handelFocus"
      @blur="handelBlur"
    />
    <!-- 右侧区域 -->
    <div class="bp-input-right">
      <transition name="bp-fade-in">
        <!-- 密码显示/隐藏 -->
        <span v-if="type=='password'&&input_value!=''&&show_right_icon" @click="showPassword">
          <i class="text-minor ri-eye-line" v-if="!show_password"></i>
          <i class="text-minor ri-eye-fill" v-else></i>
        </span>
        <!-- 清空按钮 -->
        <span v-if="type=='text'&&input_value!=''&&show_right_icon" @click="input_value=''">
          <i class="text-minor ri-close-circle-fill"></i>
        </span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "bp-input",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: ""
  },
  data() {
    return {
      input_value: this.value,
      is_focus: false,
      show_password: false,
      show_right_icon: false
    };
  },
  methods: {
    handelFocus() {
      this.is_focus = true;
      this.show_right_icon = true;
    },
    handelBlur() {
      this.is_focus = false;
      this.show_right_icon = false;
    },
    // 密码显示/隐藏
    showPassword() {
      this.show_password = !this.show_password;
      this.show_password
        ? (this.$refs.inp.type = "text")
        : (this.$refs.inp.type = "password");
    }
  }
};
</script>

<style lang="less">
@import "./bp-input";
</style>