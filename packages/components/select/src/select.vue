<template>
  <div ref="selectRef" :class="name" @click="handleClick">
    <bp-input v-model="inpVal" readonly :placeholder="placeholder"></bp-input>
    <span :class="`${name}-down-inner`"><i class="ri-arrow-down-s-line"></i> </span>

    <teleport to="body">
      <div ref="optionBoxRef" :class="`${name}-option-box`" v-show="isFocus">
        <slot></slot>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts" name="Select">
import { nextTick, onMounted, ref } from "vue";
import { vClickOutside } from "../../../directives/clickOutside";

const props = defineProps({
  /** 绑定值 Binding value */
  modelValue: { type: String, default: "" },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 占位提示文字 The placeholder text */
  placeholder: { type: String, default: "" },
  /** 是否允许清空 Clearable or not */
  clearable: { type: Boolean, default: false },
});

const name = "bp-select";
const selectRef = ref();
const optionBoxRef = ref();
const inpVal = ref<string | number>(props.modelValue || "");
const isFocus = ref<boolean>(false);

const handleClick = () => {
  isFocus.value = !isFocus.value;
};

const init = () => {
  const rect = selectRef.value.getBoundingClientRect();
  optionBoxRef.value.setAttribute("style",`width: ${rect.width}px;top:${rect.top+rect.height}px;left:${rect.left}px`);
};

onMounted(() => {
  nextTick(() => init());
});
</script>
