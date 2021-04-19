/*
 * @Author: Sam
 * @Date: 2019-11-07 14:05:54
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-28 23:12:55
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
      <!-- 右侧区域 TODO:此处渲染方面的写法有待提升-->
      <div class="bp-input-right" v-if="showRightOption">
        <transition name="bp-fade-in">
          <!-- 密码显示/隐藏按钮 -->
          <span
            v-if="showPasswordTrigger"
            @click="handlePswTrigger"
          >
            <i :class="`ri-eye-${pswTrigger ? 'fill' : 'line'}`"></i>
          </span>
        </transition>
        <transition name="bp-fade-in">
          <!-- 清空按钮 -->
          <span
            v-if="showClearIcon && showRightIcon && !showLimit"
            @click="onClear"
          >
            <i class="ri-close-circle-fill"></i>
          </span>
        </transition>
        <transition name="bp-fade-in">
          <!-- 字数限制 -->
          <span v-if="isShowLimit">
            {{ limitWord }}
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
      <span class="bp-textarea-num-limit" v-if="isShowLimit">
        {{ limitWord }}
      </span>
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
export default {
  name: "bp-input",
  props: {
    // 输入框文本值
    modelValue: {
      type: [String, Number],
      default: "",
    },
    // 占位文本
    placeholder: {
      type: String,
      default: "",
    },
    // 输入框类型
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "password", "textarea"].indexOf(value) !== -1;
      },
    },
    // 输入框尺寸
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      },
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否设置为只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 输入框 name 标识
    name: {
      type: String,
      default: "",
    },
    // 是否展示字数限制
    showLimit: {
      type: Boolean,
      default: false,
    },
    // 最大输入长度
    maxLength: {
      type: [Number, String],
      default: "",
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "default",
      validator: function (value) {
        return (
          ["default", "primary", "success", "warning", "danger"].indexOf(
            value
          ) !== -1
        );
      },
    },
    // 多行文本下高度是否自动撑开
    autosize: {
      type: Boolean,
      default: false,
    },
    // 多行文本下是否允许拖动
    resize: {
      type: Boolean,
      default: false,
    },
    // 多行文本的行数
    rows: {
      type: [Number, String],
      default: 2,
    },
  },
  setup(props, { emit }) {
    const {
      isFocus,
      showRightIcon,
      onInput,
      onFocus,
      onBlur,
      onKeyup,
      onKeydown,
    } = useInputEvent(props, emit);

    // 样式
    const { inputClass } = useClass(props);

    // 右侧显示
    const {
      showRightOption,
      isShowLimit,
      limitWord,
      showPasswordTrigger,
      showClearIcon,
    } = useRightOption(props);

    // 操作
    const { onClear } = useAction(emit);

    // 密码输入相关
    const { pswTrigger, handlePswTrigger } = usePassword();

    return {
      inputClass,
      isFocus,
      showRightIcon,
      showRightOption,
      isShowLimit,
      limitWord,
      showPasswordTrigger,
      showClearIcon,
      onInput,
      onFocus,
      onBlur,
      onKeyup,
      onKeydown,
      onClear,
      pswTrigger,
      handlePswTrigger,
    };
  },

  emits: ["update:modelValue", "focus", "blur", "keyup", "keydown", "clear"],
};

// 样式类名
function useClass(props) {
  const inputClass = computed(() => {
    let className = ["bp-input"];

    if (props.borderColor !== "default") {
      className.push(`bp-border-${props.borderColor}`);
    }

    if (props.type !== "textarea") {
      className.push(`bp-input-${props.size}`);
    }

    return className;
  });

  return {
    inputClass,
  };
}

// 右侧操作显示
function useRightOption(props) {
  // 非禁用和只读状态下才允许渲染右侧操作区域
  const showRightOption = computed(() => {
    return !props.disabled && !props.readonly;
  });

  // 当配置允许显示字数限制，且最大字数限制大于0是显示字数提示
  const isShowLimit = computed(() => {
    return props.showLimit && props.maxLength !== "" && props.maxLength > 0;
  });

  // 字数提示格式：当前输入长度/允许输入的最大长度
  const limitWord = computed(() => {
    return `${props.modelValue.length}/${props.maxLength}`;
  });

  // 当为密码框且输入内容不为空时显示密码切换按钮
  const showPasswordTrigger = computed(() => {
    return props.type === "password" && props.modelValue !== "";
  });

  const showClearIcon = computed(() => {
    return props.type === "text" && props.modelValue !== "";
  });

  return {
    showRightOption,
    isShowLimit,
    limitWord,
    showPasswordTrigger,
    showClearIcon,
  };
}

// 多行文本操作
function useTextArea() {
  // 高度自动撑开
  const autoHeight = (e) => {
    // 设置高度
    e.target.style.height = `${e.target.scrollTop + e.target.scrollHeight}px`;
  };

  return {
    autoHeight,
  };
}

// 操作
function useAction(emit) {
  // 清空输入框
  const onClear = (e) => {
    e.target.value = "";
    emit("update:modelValue", e.target.value);
    emit("clear", e.target.value);
  };

  return {
    onClear,
  };
}

// 输入框事件
function useInputEvent(props, emit) {
  const isFocus = ref(false);
  const showRightIcon = ref(false);

  const onInput = (e) => {
    emit("update:modelValue", e.target.value);
    // 多行文本下高度自适应
    if (props.type === "textarea" && props.autosize) {
      useTextArea().autoHeight(e);
    }
  };

  // 获取焦点触发
  const onFocus = (e) => {
    emit("focus", e);
    isFocus.value = true;
    showRightIcon.value = true;
  };

  // 失去焦点触发
  const onBlur = (e) => {
    emit("blur", e);
    isFocus.value = false;
    setTimeout(() => {
      showRightIcon.value = false;
    }, 100);
  };

  // 键入触发
  const onKeyup = (e) => {
    emit("keyup", e);
  };

  // 键松触发
  const onKeydown = (e) => {
    emit("keydown", e);
  };

  return {
    isFocus,
    showRightIcon,
    onInput,
    onFocus,
    onBlur,
    onKeyup,
    onKeydown,
  };
}

// 密码输入相关
function usePassword() {
  const { proxy } = getCurrentInstance();

  const pswTrigger = ref(false);

  // 密码显示隐藏切换
  const handlePswTrigger = () => {
    pswTrigger.value = !pswTrigger.value;
    proxy.$refs.inp.type = pswTrigger.value ? "text" : "password";
  };

  return {
    pswTrigger,
    handlePswTrigger,
  };
}
</script>