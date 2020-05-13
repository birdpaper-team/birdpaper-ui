/*
 * @Author: Sam
 * @Date: 2020-05-07 14:51:55
 * @Last Modified by: Sam
 * @Last Modified time: 2020-05-12 17:12:56
 */
<template>
  <div :class="className" @click="handelClick">
    <!-- 多选框内容 -->
    <div :class="innerClassName">
      <div class="bp-checkbox-inner"></div>
    </div>
    <!-- Checkbox -->
    <input ref="checkbox" type="checkbox" :name="name" v-model="inputValue" />
    <!-- 选项标签文本 -->
    <span class="bp-checkbox-inner-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "bp-checkbox",
  props: {
    // 多选框值
    value: {
      type: Boolean,
      default: false
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
  data() {
    return {
      inputValue: this.value
    };
  },
  computed: {
    className() {
      let name = ["bp-checkbox"];
      if (this.disabled) {
        name.push("bp-checkbox-disabled");
      }
      return name;
    },
    innerClassName() {
      let name = this.disabled
        ? ["bp-checkbox-inner-box-disabled"]
        : ["bp-checkbox-inner-box"];

      if (this.value) {
        name.push("checked");
      }

      return name;
    }
  },
  methods: {
    handelClick(event) {
      if (this.disabled) {
        return;
      }
      this.inputValue = !this.inputValue;
      this.$emit("input", this.inputValue);
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
@import url("./bp-checkbox.less");
</style>