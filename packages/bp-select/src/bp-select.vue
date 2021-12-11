<template>
  <div class="bp-select">
    <!-- 选择器层 -->
    <div
      :class="selectClassName"
      @click="handleSelectClick"
      @mouseenter="handleSelectMouseEnter"
      @mouseleave="handleSelectMouseLeave"
      v-click-outside="onClickOutside"
    >
      <!-- 占位文本 -->
      <span v-show="!select.label">{{ placeholder }}</span>
      <span v-show="select.label !== ''" class="select-value">{{
        select.label
      }}</span>
      <!-- 操作图标区域 -->
      <div class="option">
        <!-- 展示/收起 -->
        <i
          class="ri-arrow-down-s-line"
          :class="{ open: optionShow }"
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
    <transition name="option-slide">
      <div
        class="select-item-box scro scro-1"
        v-show="optionShow"
        @mouseenter="optionShowScrollBar = true"
        @mouseleave="optionShowScrollBar = false"
      >
        <!-- :style="`overflow-y:${optionShowScrollBar ? 'auto' : 'hidden'}`" -->
        <div class="option-arrow"></div>
        <!-- 选择器选项 -->
        <div class="option-container">
          <div
            class="bp-option"
            v-for="(item, index) in optionList"
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
import { computed, reactive, toRefs, watch, ref } from "vue";
import { clickOutside } from "../../utils/util.js";
export default {
  name: "bp-select",
  directives: { clickOutside },
  props: {
    // 选择器绑定的值
    modelValue: { type: [String, Number], default: "" },
    // 选择器占位文本
    placeholder: { type: String, default: "请选择" },
    label: { type: String, default: "label" },
    value: { type: String, default: "value" },
    // 是否可清空
    clearable: { type: Boolean, default: false },
    // 是否禁用
    disabled: { type: Boolean, default: false },
    // 选项列表
    optionList: { type: Array, default: () => [] },
    // 选择器尺寸
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      },
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      // 当前值和对应 label
      select: {
        label: "",
        value: props.modelValue,
      },
      optionShow: false, // 选项菜单展示
      optionShowScrollBar: false, // 选项菜单滚动条
      clearableIconShow: false, // 清空图标展示
    });

    const labelList = ref({});

    const render = () => {
      for (let i = 0; i < props.optionList.length; i++) {
        labelList.value[props.optionList[i][props.value]] =
          props.optionList[i][props.label];
      }
    };

    watch(
      () => props.modelValue,
      () => {
        state.select.label = labelList.value[props.modelValue];
      },
      { immediate: true }
    );

    watch(
      () => props.optionList,
      () => {
        render();
        state.select.label = labelList.value[props.modelValue];
      },
      { immediate: true }
    );

    // 属性样式控制
    const selectClassName = computed(function () {
      let name = ["select-input"];
      name.push(`select-size-${props.size}`); // 尺寸
      props.disabled ? name.push("bp-select-disabled") : ""; // 禁用
      state.optionShow ? name.push("active") : ""; // 激活
      return name;
    });

    // 点击触发
    const handleSelectClick = () => {
      if (props.disabled) return;
      state.optionShow = !state.optionShow;
    };

    // 收起选项列表
    const closeOption = () => {
      if (!state.optionShow) return;
      state.optionShow = false;
    };

    // 清除
    const clear = () => {
      state.select = {
        value: "",
        label: "",
      };
    };

    // 鼠标移入选择框
    const handleSelectMouseEnter = () => {
      if (props.disabled) {
        return;
      }
      if (props.clearable) {
        state.clearableIconShow = true;
      }
    };

    // 鼠标移出选择框
    const handleSelectMouseLeave = () => {
      if (props.disabled) {
        return;
      }
      if (props.clearable) {
        state.clearableIconShow = false;
      }
    };

    // 选项点击触发
    const handleOptionItemClick = (item) => {
      emit("update:modelValue", item[props.value]);
      // state.select.label = item[props.label];
      state.optionShow = false;
    };

    // 点击外部触发
    const onClickOutside = () => {
      state.optionShow = false;
    };

    return {
      ...toRefs(state),
      selectClassName,
      handleSelectClick,
      closeOption,
      clear,
      handleSelectMouseEnter,
      handleSelectMouseLeave,
      handleOptionItemClick,
      onClickOutside,
    };
  },
};
</script>
