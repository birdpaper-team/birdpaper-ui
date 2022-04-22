<template>
  <div :class="inputClass">
    <!-- 普通文本输入框，含有头部和尾部 -->
    <template v-if="inpType !== 'textarea'">
      <!-- 头部区域 -->
      <bp-input-first :mode="first.mode" :render="first.isRender" :icon="prefixIcon" :size="size">
        <slot name="prepend"></slot>
      </bp-input-first>
      <input
        ref="inp"
        spellcheck="false"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputInnerClass"
        :value="modelValue"
        :type="inpType"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        @keyup="keyup"
        @keydown="keydown"
        @input="onInput"
        @focus="focus"
        @blur="blur"
      />
      <!-- 尾部区域 -->
      <bp-input-tail
        :mode="tail.mode"
        :render="tail.isRender"
        :type="tail.type"
        :size="size"
        :disabled="disabled"
        :readonly="readonly"
        :inp-value="modelValue"
        :max-length="maxlength"
        :icon="suffixIcon"
        :is-click="suffixClickable"
        @click="onSuffixClick"
      >
        <slot name="append"></slot>
      </bp-input-tail>
    </template>

    <!-- 多行文本 -->
    <template v-else>
      <textarea
        ref="inp"
        spellcheck="false"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :readonly="readonly"
        :class="textareaInnerClass"
        :rows="!autosize && rows"
        :value="modelValue"
        :maxlength="maxlength"
        @input="onInput"
        @keyup="keyup"
        @keydown="keydown"
        @focus="focus"
        @blur="blur"
      />
      <div class="bp-textarea-word-limit" v-if="showLimit">
        <span>{{ modelValue.length }}/{{ maxlength }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import { computed, ref, useSlots, watch, defineProps, defineEmits, reactive } from "vue";
import { useInput } from "../../use/input";
import { useDesign } from "../../use/design";
const { EMITS, typeValidator, initSuffixType, autoHeight } = useInput();
const { sizeValidator } = useDesign();

export default { name: "bp-input" };
</script>


<script setup>
import bpInputTail from "./components/bp-input-tail.vue";
import bpInputFirst from "./components/bp-input-first.vue";

const props = defineProps({
  modelValue: { type: [String, Number], default: "", require: true }, // 绑定值 Binding values
  type: { type: String, default: "text", validator: typeValidator }, //  输入框类型 Type of the input
  size: { type: String, default: "normal", validator: sizeValidator }, // 输入框尺寸 Size of the input
  placeholder: { type: String, default: "" }, // 占位文本 The placeholder text
  disabled: { type: Boolean, default: false }, // 是否禁用 Disabled or not
  readonly: { type: Boolean, default: false }, // 是否只读 Read-only or not
  clearable: { type: Boolean, default: false }, // 是否可清空 Can be empty or not
  showLimit: { type: Boolean, default: false }, // 是否展示字数限制 Show word limit or not
  showPassword: { type: Boolean, default: false }, // 是否展示密码切换图标 Show password trigger icon or not
  maxlength: { type: Number, default: null }, // 最大输入长度 Maximum input length
  autosize: { type: Boolean, default: false }, // 高度是否自适应（type = 'textarea'） The height is adaptive or not (type = 'textarea')
  resize: { type: String, default: "none" }, // 控制能否被缩放（type = 'textarea'） Can be scaled or not (type = 'textarea')
  rows: { type: Number, default: 3 }, // 输入框的行数（type = 'textarea'） The number of lines in the input (type = 'textarea')
  name: { type: String, default: "" }, // 原生属性 Native attributes
  form: { type: String, default: "" }, // 原生属性 Native attributes
  autofocus: { type: Boolean, default: false }, // 原生属性，自动获取焦点 Native property, automatically gets focus
  autocomplete: { type: String, default: "" }, // 原生属性，自动补全 Native property, automatic completion
  suffixIcon: { type: String, default: "" }, // 自定义后缀图标 Custom suffix icon
  suffixClickable: { type: Boolean, default: false }, // 自定义后缀图标是否可点击 Custom suffix icon is clickable or not
  prefixIcon: { type: String, default: "" }, // 自定义前缀图标 Custom prefix icon
});

const emit = defineEmits(EMITS);

const inp = ref(null); // 当前 Input 实例
const isFocus = ref(false); // 是否处于聚焦状态
const inpType = ref("text"); // 当前 Input 类型

// Input 外层样式，控制尺寸等
const inputClass = computed(() => {
  let name = ["bp-input"];
  props.type !== "textarea" && name.push(`bp-${props.size}-height`);
  return name;
});

// Input 内层样式
const inputInnerClass = computed(() => [
  "bp-input-inner",
  {
    "focus-border": isFocus.value,
    "bp-has-append": hasAppend.value,
    "bp-has-prefix": hasPrefix.value,
    "bp-has-prepend": hasPrepend.value,
  },
]);

// type = 'textarea' 下的样式处理
const textareaInnerClass = computed(() => ["bp-textarea-inner", `resize-${props.resize}`, { "focus-border": isFocus.value }]);

// 头部和尾部区域
const first = reactive({ isRender: false, mode: "" }),
  tail = reactive({ isRender: false, type: "", mode: "" });

// 展示输入字数统计和限制，需要传入最大长度限制并开启 showLimit 属性
const showLimit = computed(() => props.showLimit && !!props.maxlength);

// 是否含有后缀内容，除了预设（密码切换、长度限制、清空外，还有自定义后缀图标展示的情况）
const hasSuffix = computed(
  () => (props.type === "password" && props.showPassword) || showLimit.value || props.clearable || !!props.suffixIcon
);

// 是否含有后置内容的插槽
const hasAppend = computed(() => !!useSlots().append);

// 是否含有头部的前缀内容，判断是否有用户自定义的前缀图标和插槽
const hasPrefix = computed(() => !!props.prefixIcon && !hasPrepend.value);
const hasPrepend = computed(() => !!useSlots().prepend);

// 头部和尾部的渲染判断
first.isRender = computed(() => hasPrefix.value || hasPrepend.value);
tail.isRender = computed(() => hasSuffix.value || hasAppend.value);

// 初始化输入框，获取传入的类型，并判断头尾展示
const init = () => {
  inpType.value = props.type;

  first.isRender && (first.mode = hasPrepend.value ? "prepend" : "prefix");

  if (tail.isRender) {
    tail.mode = hasAppend.value ? "append" : "suffix";
    // 根据传入的属性判断所属的 suffix 类型
    !hasAppend.value && (tail.type = initSuffixType(props));
  }
};

// 后缀图标点击触发
const onSuffixClick = () => {
  // 切换密码图标，需要设置输入框类型以及更改尾部 suffix 的类型
  if (props.type === "password") {
    inpType.value = inpType.value === "text" ? "password" : "text";
    tail.type = tail.type === "psw-eye-line" ? "psw-eye-fill" : "psw-eye-line";
    return;
  }
  props.clearable && clearValue();
  emit("suffix-click");
};

// 清空值
const clearValue = () => {
  emit("update:modelValue", "");
  emit("clear");
};

const onInput = (e) => {
  emit("update:modelValue", e.target.value);
  emit("input", e.target.value);
};

// 获取焦点触发
const focus = (e) => {
  isFocus.value = true;
  emit("focus", e);
};

// 失去焦点触发
const blur = (e) => {
  isFocus.value = false;
  emit("blur", e);
};

// 键入触发
const keyup = (e) => emit("keyup", e);

// 键松触发
const keydown = (e) => emit("keydown", e);

// 聚焦并选中输入框的值
const select = () => inp.value.select();

watch(
  () => props.modelValue,
  () => {
    // 多行文本下高度自适应
    if (props.type === "textarea" && props.autosize) autoHeight(inp.value);
  }
);
watch(
  () => [props.showPassword, props.type, hasAppend.value, hasSuffix.value],
  () => init(),
  { immediate: true }
);

defineExpose({ blur, focus, select });
</script>