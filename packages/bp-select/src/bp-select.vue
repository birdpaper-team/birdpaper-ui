/*
 * @Author: Sam
 * @Date: 2020-01-28 16:52:14
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-20 08:55:43
 */
<template>
  <div class="bp-select" v-click-outside="closeOption">
    <!-- 选择器层 -->
    <div
      :class="selectClassName"
      @click="optionShow = !optionShow"
      @mouseenter="handleSelectMouseEnter"
      @mouseleave="handleSelectMouseLeave"
    >
      <!-- 占位文本 -->
      <span v-show="select.label == ''">{{placeholder}}</span>
      <span v-show="select.label != ''" class="select-value">{{select.label}}</span>
      <!-- 操作图标区域 -->
      <div class="option">
        <!-- 展示/收起 -->
        <i
          class="ri-arrow-down-s-line"
          :class="{'open':optionShow}"
          v-if="select.value == '' || !clearableIconShow"
        ></i>
        <!-- 清除 -->
        <i
          class="ri-close-circle-fill"
          v-if="clearableIconShow && select.value != ''"
          @click="clear"
        ></i>
      </div>
    </div>
    <!-- 下拉选项列表 -->
    <transition name="bp-zoom-in-top">
      <div
        class="select-item-box scro scro-1"
        v-show="optionShow"
        @mouseenter="optionShowScrollBar = true"
        @mouseleave="optionShowScrollBar = false"
        :style="`overflow-y:${optionShowScrollBar ? 'auto' : 'hidden'}`"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { globalBus } from "../../globalBus";
import { clickOutside } from "../../utils/util";
export default {
  name: "bp-select",
  props: {
    // 选择器绑定的值
    value: {
      type: [String, Number],
      default: ""
    },
    // 选择器占位文本
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 选择器尺寸
    size: {
      type: String,
      default: "normal"
    }
  },
  directives: { clickOutside },
  data() {
    return {
      // 当前值和对应 label
      select: {
        label: "",
        value: this.value
      },
      // 选项菜单展示
      optionShow: false,
      // 选项菜单滚动条
      optionShowScrollBar: false,
      // 选项数据列表
      optionList: [],
      clearableIconShow: false
    };
  },
  computed: {
    selectClassName() {
      let name = ["select-input"];
      name.push(`select-size-${this.size}`);
      this.optionShow ? name.push("active") : "";
      return name;
    }
  },
  created() {
    // 监听选项改变
    this.$on("handleOptionChange", this.handleOptionChange);
    // 监听选项渲染完成
    this.$on("handleOptionCreated", this.handleOptionCreated);
  },
  methods: {
    // 选项渲染完成后接受来自 option 的数据
    handleOptionCreated(data) {
      // 如果选择器含有默认 value ，匹配成功后显示对应 label
      if (data.value === this.value) {
        this.select.label = data.label;
      }
      this.optionList.push(data);
    },
    // 选项改变触发
    handleOptionChange(data) {
      this.select = JSON.parse(JSON.stringify(data));
      this.$emit("input", this.select.value);
      this.closeOption();
    },
    // 收起选项列表
    closeOption() {
      this.optionShow = false;
    },
    // 清除
    clear() {
      this.select = {
        value: "",
        label: ""
      };
    },
    // 鼠标移入选择框
    handleSelectMouseEnter() {
      if (this.clearable) {
        this.clearableIconShow = true;
      }
    },
    // 鼠标移出选择框
    handleSelectMouseLeave() {
      if (this.clearable) {
        this.clearableIconShow = false;
      }
    }
  }
};
</script>
<style lang="less">
@import "./bp-select.less";
</style>