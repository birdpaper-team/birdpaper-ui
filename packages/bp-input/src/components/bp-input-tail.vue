<template>
  <div :class="`bp-input-tail bp-${props.size}-height`" v-if="render">
    <!--suffix 和 append 只能取其一，且 append > suffix-->
    <div
      v-if="mode === 'suffix'"
      v-show="cfg.show"
      :class="['bp-input-suffix', { 'suffix-is-click': cfg.isClick }]"
      @click="onClick"
    >
      <i v-if="!!cfg.icon" :class="cfg.icon"></i>
      <span v-else>{{ cfg.text }}</span>
    </div>

    <div class="bp-input-append" v-else><slot></slot></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref, computed } from "vue";

const props = defineProps({
  render: { type: Boolean, default: false }, // 开启尾部区域渲染
  mode: { type: String, default: "suffix" }, // 尾部模式，suffix-尾部内容，append-后置内容
  // suffix 模式下的预设内容类型 [psw-eye-line, psw-eye-fill]-密码明文切换，clearable-清空值，word-limit -文本长度限制，custom-自定义
  type: { type: String, default: "custom" },
  icon: { type: String, default: "" }, // suffix 下的尾部图标
  size: { type: String, default: "normal" }, // 输入框尺寸
  maxLength: { type: Number, default: null }, // 最大输入长度
  inpValue: { type: [String, Number], default: "" }, // 输入框的内容值
  disabled: { type: Boolean, default: false }, // 是否禁用
  readonly: { type: Boolean, default: false }, // 是否只读
  isClick: { type: Boolean, default: false }, // suffix 下尾部内容是否可点击
});

const emit = defineEmits(["click"]);

const cfg = ref(null);
const CLOSE_ICON = "ri-close-circle-fill"; // 清空图标

class bpInputTail {
  /**
   * Input 输入框尾部属性
   * @param {String} icon 图标
   * @param {String} text 文本内容
   * @param {Boolean} isClick 是否可点击
   * @param {Boolean} show 显示/隐藏
   */
  constructor(icon, text, isClick, show) {
    this.icon = icon;
    this.text = text;
    this.isClick = isClick;
    this.show = show;
  }
}

const unInput = computed(() => props.disabled || props.readonly);

// 在 suffix 模式下，初始化输入框尾部显示内容和配置
const init = () => {
  if (props.mode === "append" || !props.render) return;

  switch (props.type) {
    // 密码输入框的类型切换
    case "psw-eye-line":
      cfg.value = new bpInputTail("ri-eye-line", "", !unInput.value, true);
      break;
    case "psw-eye-fill":
      cfg.value = new bpInputTail("ri-eye-fill", "", !unInput.value, true);
      break;

    // 清空输入框值，输入框含有值的情况下展示清空图标
    case "clearable":
      const show = computed(() => !!props.inpValue);
      cfg.value = new bpInputTail(CLOSE_ICON, "", !unInput.value, show);
      break;

    // 输入框长度限制提示
    case "word-limit":
      const text = computed(
        () => `${props.inpValue.length}/${props.maxLength}`
      );
      cfg.value = new bpInputTail("", text, false, true);
      break;

    // 自定义尾部图标展示， suffix 下暂不支持文本内容
    case "custom":
      const { icon, isClick } = props;
      cfg.value = new bpInputTail(icon, "", isClick, true);
      break;
  }
};

const onClick = () => {
  if (!cfg.value.isClick || unInput.value) return;
  emit("click");
};

watch(
  () => [props.type, props.size, props.icon, props.maxLength, props.isClick],
  () => init(),
  { immediate: true }
);
</script>

<script>
export default { name: "bp-input-tail" };
</script>
