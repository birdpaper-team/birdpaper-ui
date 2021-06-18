<template>
  <div :class="className" @click="onClick">
    <!-- 单选框内容 -->
    <div :class="innerClassName">
      <div class="bp-radio-inner"></div>
    </div>
    <input
      ref="radio"
      type="radio"
      :name="name"
      :value="label"
      v-model="modelValue"
      aria-hidden="true"
    />
    <!-- 选项标签文本 -->
    <span class="bp-radio-inner-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "bp-radio",
  props: {
    modelValue: { type: [String, Number], default: "" }, // 单选框绑定值
    label: { type: [Boolean, String, Number], default: "" }, // 单选框标签
    name: { type: String, default: "" }, // 相当于原生 name 属性
    disabled: { type: Boolean, default: false }, // 是否禁用
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const className = computed(() => {
      let name = ["bp-radio"];
      if (props.disabled) {
        name.push("bp-radio-disabled");
      }
      return name;
    });

    const innerClassName = computed(() => {
      let name = props.disabled
        ? ["bp-radio-inner-box-disabled"]
        : ["bp-radio-inner-box"];
      if (props.modelValue === props.label) {
        name.push("checked");
      }
      return name;
    });

    const onClick = () => {
      if (props.disabled) return;
      emit("update:modelValue", props.label);
    };

    return {
      onClick,
      className,
      innerClassName,
    };
  },
};
</script>
