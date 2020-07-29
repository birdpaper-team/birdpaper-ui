/*
 * @Author: Sam
 * @Date: 2020-07-06 10:18:43
 * @Last Modified by: Sam
 * @Last Modified time: 2020-07-06 14:08:09
 */
<template>
  <div :class="className" @click="handleClick">
    <!-- 单选框内容 -->
    <div :class="innerClassName">
      <div class="bp-radio-inner"></div>
    </div>
    <!-- radio -->
    <input ref="radio" type="radio" :name="name" :value="label" v-model="inputValue" />
    <!-- 选项标签文本 -->
    <span class="bp-radio-inner-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "bp-radio",
  props: {
    // 多选框值
    value: {
      type: [String, Number],
      default: false
    },
    // 单选框值
    label: {
      type: [Boolean, String, Number],
      default: ""
    },
    // name
    name: {
      type: String,
      default: ""
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let name = ["bp-radio"];
      if (this.disabled) {
        name.push("bp-radio-disabled");
      }
      return name;
    },
    innerClassName() {
      let name = this.disabled
        ? ["bp-radio-inner-box-disabled"]
        : ["bp-radio-inner-box"];

      if (this.value === this.label) {
        name.push("checked");
      }

      return name;
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.inputValue = this.label;
      this.$emit("input", this.inputValue);
    }
  }
};
</script>

<style lang="less">
@import "./bp-radio.less";
</style>