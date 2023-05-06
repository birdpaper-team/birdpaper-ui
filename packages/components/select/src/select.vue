<template>
  <div
    ref="selectRef"
    :class="[name, isFocus ? `${name}-focus` : '']"
    @click.stop="handleClick"
    @mouseleave="onMouseleave"
    v-clickOutside="onClickOutside"
  >
    <bp-input ref="inpRef" v-model="inpVal.label" readonly :placeholder="placeholder">
      <template #suffix>
        <i :class="[`${name}-icon-inner`, `ri-arrow-${isFocus ? 'up' : 'down'}-s-line`]"></i>
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
import { PropType, VNode, computed, nextTick, onBeforeUnmount, onMounted, provide, reactive, ref, useSlots } from "vue";
import { SelectBindValue, SelectOption, selectInjectionKey } from "./type";
import { vClickOutside } from "../../../directives/clickOutside";
import { getAllElements } from "../../../utils/dom";
import { off, on, throttle } from "../../../utils/util";

const props = defineProps({
  /** 绑定值 Binding value */
  modelValue: { type: [String, Number] as PropType<SelectBindValue>, default: "" },
  // TODO /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 占位提示文字 The placeholder text */
  placeholder: { type: String, default: "" },
  // TODO /** 是否允许清空 Clearable or not */
  clearable: { type: Boolean, default: false },
});
const emits = defineEmits<{
  (e: "update:modelValue", val: SelectBindValue): void;
}>();
const slots = useSlots();

const name = "bp-select";
const selectRef = ref();
const inpRef = ref();
const optionBoxRef = ref();
const inpVal = reactive<SelectOption>(new SelectOption());
const isFocus = ref<boolean>(false);

const valueMap = computed(() => {
  try {
    let obj = {};
    const children: VNode[] = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment) ?? [];

    for (const item of children) {
      if(item.type["name"] === "BpOption"){
        obj[item.props.value] = item.props.label || item.children["default"]?.()[0].children;
      }
    }
    return obj;
  } catch (error) {
    return {};
  }
});

const handleClick = () => {
  if (props.disabled) return;

  isFocus.value = !isFocus.value;
  isFocus.value && inpRef.value.handleFocus();
};

const handleResize = () => {
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
    modelValue: props.modelValue,
    onSelect: (v: SelectBindValue, payload: any) => {
      inpVal.value = v;
      inpVal.label = payload.label;
      emits("update:modelValue", inpVal.value);

      isFocus.value = false;
    },
  });

  inpVal.value = props.modelValue;
  inpVal.label = valueMap.value[inpVal.value];
};
setup();

onMounted(() => {
  nextTick(() => {
    on(window, "resize", throttle(handleResize, 100));
    handleResize();
  });
});

onBeforeUnmount(() => {
  off(window, "resize", handleResize);
});
</script>
