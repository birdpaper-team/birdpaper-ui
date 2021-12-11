<template>
  <div class="bp-dropdown" v-click-outside="onClose" @mouseleave="onMouseLeave">
    <div class="bp-dropdown-inner" @click="onClick" @mouseenter="onMouseEnter">
      <p class="bp-dropdown-inner-text">
        <slot></slot>
        <i
          class="ri-arrow-down-s-line"
          v-if="!hideArrow"
          :class="{ open: optionShow }"
        ></i>
      </p>
    </div>
    <!-- 选项 -->
    <bp-dropdown-option
      v-model="optionShow"
      :optionArrowLeft="optionArrowLeft"
      :source="options"
      :label="label"
      :value="value"
      @click="onOptionClick"
    ></bp-dropdown-option>
  </div>
</template>

<script>
import { ref } from "vue";
import bpDropdownOption from "./components/bp-dropdown-option.vue";
import { clickOutside } from "../../utils/util.js";

const triggerList = ["click", "hover"]; // 可用触发方式

export default {
  name: "bp-dropdown",
  directives: { clickOutside },
  components: { bpDropdownOption },
  props: {
    options: { type: Array, default: [] }, // 菜单
    label: { type: String, default: "label" }, // 展示文本字段
    value: { type: String, default: "value" }, // 选项值字段
    hideOnClick: { type: Boolean, default: true }, // 是否在点击菜单项后收起菜单
    hideArrow: { type: Boolean, default: false }, // 是否隐藏箭头
    optionArrowLeft: { type: Number, default: 24 }, // 菜单箭头向左的偏移量
    trigger: {
      type: String,
      default: "click",
      validator: (value) => triggerList.indexOf(value) !== -1,
    }, // 触发方式
  },
  emits: ["change", "visible-change"],
  setup(props, { emit }) {
    const optionShow = ref(false);

    // 收起选项列表
    const onClose = () => {
      if (!optionShow.value) return;
      optionShow.value = false;
      emit("visible-change", optionShow.value);
    };

    // 展开选项列表
    const onOpen = () => {
      if (optionShow.value) return;
      optionShow.value = true;
      emit("visible-change", optionShow.value);
    };

    const onClick = () => {
      if (props.trigger === "hover") return;
      optionShow.value ? onClose() : onOpen();
    };
    const onMouseEnter = () => {
      if (props.trigger === "click") return;
      onOpen();
    };
    const onMouseLeave = () => {
      if (props.trigger === "click") return;
      onClose();
    };

    const onOptionClick = (item) => {
      emit("change", item);
      if (props.hideOnClick) onClose();
    };

    return {
      optionShow,
      onClick,
      onClose,
      onMouseEnter,
      onMouseLeave,
      onOptionClick,
    };
  },
};
</script>
