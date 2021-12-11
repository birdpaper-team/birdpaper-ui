<template>
  <transition name="option-slide">
    <div class="select-item-box scro scro-1" v-show="modelValue">
      <div class="option-arrow" :style="`left:${optionArrowLeft}%`"></div>
      <div class="bp-dropdown-option-container">
        <div
          class="bp-dropdown-option"
          v-for="(item, index) in source"
          :key="`option-${index}`"
          :title="item[label]"
          @click="onClick(item)"
        >
          <!-- 下拉选项内容 -->
          <div class="item">
            <p :class="['item-content', { 'item-disabled': item['disabled'] }]">
              {{ item[label] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "bp-dropdown-option",
  props: {
    modelValue: { type: Boolean, default: false },
    source: { type: Array, default: () => [] },
    label: { type: String, default: "label" }, // 展示文本字段
    value: { type: String, default: "value" }, // 选项值字段
    optionArrowLeft: { type: Number, default: 24 }, // 菜单箭头向左的偏移量
  },
  emits: ["click"],
  setup(props, { emit }) {
    const onClick = (item) => {
      if (item.disabled) return;
      emit("click", item);
    };

    return {
      onClick,
    };
  },
};
</script>