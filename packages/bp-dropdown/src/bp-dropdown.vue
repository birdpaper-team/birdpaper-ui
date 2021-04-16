/*
 * @Author: Sam
 * @Date: 2021-04-12 11:05:01
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-16 08:38:39
 */
<template>
  <div class="bp-dropdown">
    <div
      class="bp-dropdown-inner"
      @click="handleSelectClick"
      v-click-outside="onClickOutside"
    >
      <p class="bp-dropdown-inner-text">
        <slot></slot>
        <i class="ri-arrow-down-s-line" :class="{ open: optionShow }"></i>
      </p>
    </div>
    <!-- 选项 -->
    <transition name="option-slide">
      <div class="select-item-box scro scro-1" v-show="optionShow">
        <div class="option-arrow"></div>
        <div class="bp-dropdown-option-container">
          <div
            class="bp-dropdown-option"
            v-for="(item, index) in options"
            :key="`option-${index}`"
            :title="item[label]"
            @click="handleOptionItemClick(item)"
          >
            <!-- 选项内容 -->
            <div class="item">
              <span>{{ item[label] }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, reactive, toRefs, watch } from "vue";
import { clickOutside } from "../../utils/util.js";
export default {
  name: "bp-dropdown",
  directives: { clickOutside },
  props: {
    options: { type: Array, default: [] },
    label: { type: String, default: "label" },
    value: { type: String, default: "value" },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const state = reactive({
      optionShow: false, // 选项菜单展示
      optionShowScrollBar: false, // 选项菜单滚动条
    });

    const handleSelectClick = () => {
      state.optionShow = !state.optionShow;
    };

    // 收起选项列表
    const closeOption = () => {
      if (!state.optionShow) return;
      state.optionShow = false;
    };

    const handleOptionItemClick = (item) => {
      emit("change", item);
      state.optionShow = false;
    };

    // 点击外部触发
    const onClickOutside = () => {
      state.optionShow = false;
    };

    return {
      ...toRefs(state),
      handleSelectClick,
      closeOption,
      handleOptionItemClick,
      onClickOutside,
    };
  },
};
</script>