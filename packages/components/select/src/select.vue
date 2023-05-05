<template>
  <div
    ref="selectRef"
    :class="[name, isFocus ? `${name}-focus` : '']"
    @click.stop="handleClick"
    v-clickOutside="onClickOutside"
    @mouseleave="onMouseleave"
  >
    <bp-input ref="inpRef" v-model="inpVal" readonly :placeholder="placeholder">
      <template #suffix>
        <i class="ri-arrow-down-s-line"></i>
      </template>
    </bp-input>

    <teleport to="body">
      <Transition name="fade-select" appear>
        <div ref="optionBoxRef" :class="`${name}-option-box`" v-show="isFocus">
          <ul :class="`${name}-option-list`">
            <slot></slot>
          </ul>
        </div>
      </Transition>
    </teleport>
  </div>
</template>

<script setup lang="ts" name="Select">
import { nextTick, onBeforeUnmount, onMounted, provide, ref } from "vue";
import { vClickOutside } from "../../../directives/clickOutside";
import { off, on, throttle } from "../../../utils/util";
import { selectInjectionKey } from "./type";

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
const inpRef = ref();
const optionBoxRef = ref();
const inpVal = ref<string | number>(props.modelValue || "");
const isFocus = ref<boolean>(false);

const handleClick = () => {
  isFocus.value = !isFocus.value;
};

const init = () => {
  const rect = selectRef.value.getBoundingClientRect();
  optionBoxRef.value.setAttribute(
    "style",
    `display:${isFocus.value ? "block" : "none"};width: ${rect.width}px;top:${rect.top + rect.height}px;left:${
      rect.left
    }px`
  );
};

const onClickOutside = () => {
  isFocus.value = false;
};
const onMouseleave = () => {
  !isFocus.value && inpRef.value.handleBlur();
};

const setup = () => {
  provide(selectInjectionKey, {
    onSelect: (v: any) => {
      inpVal.value = v.label;
    },
  });
};
setup();

onMounted(() => {
  nextTick(() => {
    on(window, "resize", throttle(init, 100));
    init();
  });
});

onBeforeUnmount(() => {
  off(window, "resize", init);
});
</script>
