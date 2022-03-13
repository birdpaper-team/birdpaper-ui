<template>
  <div class="bp-switch">
    <span :class="innerClassName" :value="modelValue" @click="handleSwitchClick"></span>
  </div>
</template>
<script>
export default {
  name: "bp-switch",
  props: {
    modelValue: { type: Boolean, default: false, require: true }, // 绑定值 Binding values
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // name 属性
    name: {
      type: String,
      default: "",
    },
    // 打开时的值
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    // 关闭时的值
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    // 开关主题类型
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          ["primary", "success", "warning", "danger"].indexOf(value) !== -1
        );
      },
    },
  },
  data() {
    return {
      isChecked: this.value === this.activeValue,
    };
  },
  computed: {
    // 开关样式类名
    innerClassName() {
      let name = ["bp-switch-inner"];
      if (this.isChecked) {
        name.push(`switch-${this.type}`);
        name.push("bp-switch-on");
      }
      if (this.disabled) {
        name.push("switch-disabled");
      }
      return name;
    },
  },
  watch: {
    value(val) {
      this.isChecked = val === this.activeValue;
    },
    isChecked(val) {
      this.$emit(
        "input",
        this.isChecked ? this.activeValue : this.inactiveValue
      );
    },
  },
  methods: {
    // 开关点击触发
    handleSwitchClick() {
      if (this.disabled) {
        return;
      }
      this.isChecked = !this.isChecked;
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>