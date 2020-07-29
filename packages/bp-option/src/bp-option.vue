/*
 * @Author: Sam
 * @Date: 2020-01-28 16:52:14
 * @Last Modified by: Sam
 * @Last Modified time: 2020-07-28 09:06:26
 */
<template>
  <!-- 选择器选项 -->
  <div class="bp-option" :title="label" @click="pushDataToSelect('handleOptionChange')">
    <!-- 选项内容 -->
    <div class="item">
      <span>{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bp-option",
  props: {
    // 选项文字
    label: {
      type: String,
      default: ""
    },
    // 选项值
    value: {
      type: [String, Number],
      default: ""
    }
  },
  mounted() {
    // DOM 渲染完成需要将数据传向 select
    this.pushDataToSelect("handleOptionCreated");
  },
  methods: {
    // 将 option 数据传递给的 select 组件
    pushDataToSelect(e) {
      // handleOptionCreated | 将自身数据传递给 select 做存储
      // handleOptionChange | 选项更改（点击）后触发

      let data = {
        value: this.value,
        label: this.label
      };

      this.$parent.$emit(e, data);
    }
  }
};
</script>
<style lang="less">
@import "./bp-option.less";
</style>