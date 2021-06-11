/*
 * @Author: Sam
 * @Date: 2019-11-07 14:05:54
 * @Last Modified by: Sam
 * @Last Modified time: 2021-06-01 08:55:29
 */
<template>
  <div
    :class="[inputClass, { 'focus-border': isFocus }]"
    v-click-outside="onClickOutside"
  >
    <!-- 普通文本类型 -->
    <template v-if="type !== 'textarea'">
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
        :value="modelValue"
        @keyup="onKeyup"
        @keydown="onKeydown"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <!-- 右侧区域 -->
      <div class="bp-input-right" v-if="rightOption.show">
        <bp-input-suffix v-model="isSuffix" @click="onRightOptionClick">
          <slot name="suffix">
            <i v-if="rightOption.icon !== ''" :class="rightOption.icon"></i>
            <span v-if="rightOption.text !== ''">
              {{ rightOption.text }}
            </span>
          </slot>
        </bp-input-suffix>
        <bp-input-append v-model="isAppend">
          <slot name="append"> </slot>
        </bp-input-append>
      </div>
    </template>
    <!-- 多行文本 -->
    <template v-else>
      <textarea
        ref="inp"
        spellcheck="false"
        :name="name"
        :class="['bp-textarea-inner', resize ? '' : 'resize-none']"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
        @keyup="onKeyup"
        @keydown="onKeydown"
        @focus="onFocus"
        @blur="onBlur"
      />
      <!-- 字数限制 -->
      <div class="bp-textarea-num-limit" v-if="rightOption.show">
        <div class="bp-input-suffix">
          <span class="bp-input-suffix-inner">
            <span v-if="rightOption.text !== ''">
              {{ rightOption.text }}
            </span>
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { clickOutside } from "../../utils/util.js";
import { useInputRight } from "./inputRight.js";
import bpInputSuffix from "./components/bp-input-suffix.vue";
import bpInputAppend from "./components/bp-input-append.vue";

const inpTypeList = ["text", "password", "textarea"]; // 输入框可用类型
const sizeList = ["mini", "small", "normal", "large"]; // 可用尺寸
const themeList = ["default", "primary", "success", "warning", "danger"]; // 可用边框颜色

export default {
  name: "bp-input",
  directives: { clickOutside },
  components: { bpInputSuffix, bpInputAppend },
  props: {
    modelValue: { type: [String, Number], default: "" }, // 输入框文本值
    placeholder: { type: String, default: "" }, // 占位文本
    disabled: { type: Boolean, default: false }, // 是否禁用
    readonly: { type: Boolean, default: false }, // 是否只读
    clearable: { type: Boolean, default: false }, // 是否展示清空按钮
    name: { type: String, default: "" }, // 输入框 name 标识
    showLimit: { type: Boolean, default: false }, // 是否展示字数限制
    maxLength: { type: Number, default: null }, // 最大输入长度
    autosize: { type: Boolean, default: false }, // 多行文本下高度是否自动撑开
    resize: { type: Boolean, default: false }, // 多行文本下是否允许拖动
    rows: { type: Number, default: 2 }, // 多行文本的行数
    suffixIcon: { type: String, default: "" }, // 输入框尾部图标
    type: {
      type: String,
      default: "text",
      validator: (value) => inpTypeList.indexOf(value) !== -1,
    }, // 输入框类型
    size: {
      type: String,
      default: "normal",
      validator: (value) => sizeList.indexOf(value) !== -1,
    }, // 输入框尺寸
    borderColor: {
      type: String,
      default: "default",
      validator: (value) => themeList.indexOf(value) !== -1,
    }, // 边框颜色
  },
  setup(props, { emit, slots }) {
    const isFocus = ref(false);
    // 样式
    const inputClass = computed(() => {
      let className = ["bp-input"];

      if (props.borderColor !== "default")
        className.push(`bp-border-${props.borderColor}`);

      if (props.type !== "textarea") className.push(`bp-input-${props.size}`);

      return className;
    });

    const isSuffix = computed(() => {
      return (rightOption.visibled && !slots.append) || slots.suffix;
    });
    const isAppend = computed(() => {
      return slots.append;
    });

    // 右侧显示
    const {
      rightOption,
      onRightOptionClick,
      showRightArea,
      renderRightArea,
    } = useInputRight(props, emit);

    watch(
      () => [props.showLimit, props.clearable, props.suffixIcon],
      () => {
        renderRightArea();
        // showRightArea();
      }
    );
    watch(
      () => props.suffixIcon,
      () => {
        rightOption.icon = props.suffixIcon;
        showRightArea();
        renderRightArea();
      },
      {
        immediate: true,
      }
    );

    showRightArea();

    const onInput = (e) => {
      emit("update:modelValue", e.target.value);
      showRightArea(e.target.value);
      // 多行文本下高度自适应
      if (props.type === "textarea" && props.autosize) autoHeight(e);
    };

    // 获取焦点触发
    const onFocus = (e) => {
      isFocus.value = true;
      showRightArea(e.target.value);
      emit("focus", e);
    };

    // 失去焦点触发
    const onBlur = (e) => {
      isFocus.value = false;
      emit("blur", e);
    };

    // 点击外部触发
    const onClickOutside = () => {
      if (props.clearable && props.type !== "password") {
        rightOption.visibled = false;
      }
    };

    // 键入触发
    const onKeyup = (e) => {
      emit("keyup", e);
      renderRightArea();
    };

    // 键松触发
    const onKeydown = (e) => emit("keydown", e);

    // 高度自动撑开
    const autoHeight = (e) => {
      e.target.style.height = `${e.target.scrollTop + e.target.scrollHeight}px`;
    };

    return {
      rightOption,
      isFocus,
      inputClass,
      isSuffix,
      isAppend,
      showRightArea,
      onRightOptionClick,
      onInput,
      onFocus,
      onBlur,
      onKeyup,
      onClickOutside,
      onKeydown,
    };
  },

  emits: ["update:modelValue", "focus", "blur", "keyup", "keydown", "clear"],
};
</script>