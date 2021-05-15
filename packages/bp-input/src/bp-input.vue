/*
 * @Author: Sam
 * @Date: 2019-11-07 14:05:54
 * @Last Modified by: Sam
 * @Last Modified time: 2021-05-15 08:24:19
 */
<template>
  <div :class="[inputClass, isFocus ? 'focus-border' : '']">
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
        <the-input-option
          v-model="rightOption.visibled"
          :icon="rightOption.icon"
          :text="rightOption.text"
          @click="onRightOptionClick"
        ></the-input-option>
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
      <the-input-option
        v-model="rightOption.visibled"
        is-textarea
        :icon="rightOption.icon"
        :text="rightOption.text"
        @click="onRightOptionClick"
      ></the-input-option>
    </template>
  </div>
</template>

<script>
import {
  computed,
  getCurrentInstance,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import TheInputOption from "./components/the-input-option.vue";

const inpTypeList = ["text", "password", "textarea"]; // 输入框可用类型
const sizeList = ["mini", "small", "normal", "large"]; // 可用尺寸
const bdColorList = ["default", "primary", "success", "warning", "danger"]; // 可用边框颜色

export default {
  name: "bp-input",
  props: {
    modelValue: { type: [String, Number], default: "" }, // 输入框文本值
    placeholder: { type: String, default: "" }, // 占位文本
    disabled: { type: Boolean, default: false }, // 是否禁用
    readonly: { type: Boolean, default: false }, // 是否只读
    clearable: { type: Boolean, default: false }, // 是否展示清空按钮
    name: { type: String, default: "" }, // 输入框 name 标识
    showLimit: { type: Boolean, default: false }, // 是否展示字数限制
    maxLength: { type: [Number, String], default: "" }, // 最大输入长度
    autosize: { type: Boolean, default: false }, // 多行文本下高度是否自动撑开
    resize: { type: Boolean, default: false }, // 多行文本下是否允许拖动
    rows: { type: [Number, String], default: 2 }, // 多行文本的行数
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
      validator: (value) => bdColorList.indexOf(value) !== -1,
    }, // 边框颜色
  },
  components: {
    TheInputOption,
  },
  setup(props, { emit }) {
    const isFocus = ref(false);
    // 样式
    const inputClass = computed(() => {
      let className = ["bp-input"];

      if (props.borderColor !== "default")
        className.push(`bp-border-${props.borderColor}`);

      if (props.type !== "textarea") className.push(`bp-input-${props.size}`);

      return className;
    });

    // 右侧显示
    const { rightOption, onRightOptionClick, showRightArea } = useRightOption(
      props,
      emit
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
      if (props.clearable || props.type === "password") {
        rightOption.visibled = false;
      }
      emit("blur", e);
    };

    // 键入触发
    const onKeyup = (e) => {
      emit("keyup", e);
      showRightArea(e.target.value);
    };

    // 键松触发
    const onKeydown = (e) => emit("keydown", e);

    // 高度自动撑开
    const autoHeight = (e) => {
      e.target.style.height = `${e.target.scrollTop + e.target.scrollHeight}px`;
    };

    return {
      rightOption,
      onRightOptionClick,
      isFocus,
      inputClass,
      showRightArea,
      onInput,
      onFocus,
      onBlur,
      onKeyup,
      onKeydown,
    };
  },

  emits: ["update:modelValue", "focus", "blur", "keyup", "keydown", "clear"],
};

// 右侧操作显示
// 优先级：slot > clearable > showLimit > props
function useRightOption(props, emit) {
  const { proxy } = getCurrentInstance();
  const rightOptionShow = ref(false);

  const rightOption = reactive({
    show: false,
    visibled: false,
    icon: "",
    text: "",
    theme: "gary", // todo
    bgTheme: "default", // todo
  });

  rightOption.show = computed(() => !props.disabled && !props.readonly);

  // 控制展示右侧区域
  const showRightArea = (inpVal = "") => {
    if (props.showLimit) {
      rightOption.text = computed(
        () => `${props.modelValue.length}/${props.maxLength}`
      );

      rightOption.icon = "";
      rightOption.visibled = true;
      return;
    }

    rightOption.text = "";
    rightOption.visibled = inpVal !== "";

    if (props.clearable) {
      rightOption.icon = "ri-close-circle-fill";
      return;
    }
    if (props.type === "password") rightOption.icon = "ri-eye-fill";
    return;
  };

  const onRightOptionClick = (e) => {
    // 清空值
    if (props.clearable) {
      e.target.value = "";
      emit("update:modelValue", e.target.value);
      rightOption.visibled = false;
      emit("clear", e.target.value);
      return;
    }
    // 密码输入框下文本显示切换
    if (props.type === "password") {
      const isText = proxy.$refs.inp.type === "text";
      rightOption.icon = isText ? "ri-eye-fill" : "ri-eye-line";
      proxy.$refs.inp.type = !isText ? "text" : "password";
    }
  };

  return {
    rightOption,
    onRightOptionClick,
    showRightArea,
  };
}
</script>