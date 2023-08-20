<template>
  <div
    ref="selectRef"
    :class="clsName"
    @click.stop="handleClick"
    @mouseleave="onMouseleave"
    v-clickOutside="onClickOutside"
  >
    <bp-input ref="inpRef" :disabled="disabled" v-model="currentSelect.label" readonly :placeholder="placeholder">
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

<script lang="ts">
import { PropType, nextTick, onBeforeUnmount, onMounted, provide, ref } from "vue";
import { SelectBindValue, selectInjectionKey } from "./type";
import { vClickOutside } from "../../../directives/clickOutside";
import { off, on, throttle } from "../../../utils/util";
import { defineComponent } from "vue";
import BpInput from "../../input/src/input.vue";
import { watch } from "vue";
import { useSelect } from "./select";
import { computed } from "vue";

export default defineComponent({
  name: "Select",
  components: { BpInput },
  directives: { clickOutside: vClickOutside },
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [String, Number] as PropType<SelectBindValue>, default: "" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    // TODO /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const name = "bp-select";
    const selectRef = ref();
    const inpRef = ref();
    const optionBoxRef = ref();
    const { currentSelect, valueMap, isFocus } = useSelect(slots);

    provide(selectInjectionKey, {
      modelValue: props.modelValue,
      currentSelect: currentSelect,
      onSelect: (v: SelectBindValue, payload: any) => {
        currentSelect.value = v;
        currentSelect.label = payload.label;
        emit("update:modelValue", currentSelect.value);
        emit("change", currentSelect.value);

        // 选择后主动关闭选项面板
        isFocus.value = false;
      },
    });

    const clsName = computed(() => {
      let cls = [name];
      if (isFocus.value) cls.push(`${name}-focus`);
      if (props.disabled) cls.push(`${name}-disabled`);

      return cls;
    });


    /** 外层点击触发，聚焦并打开下拉面板 */
    const handleClick = () => {
      if (props.disabled) return;
      handleTrigger();

      isFocus.value = !isFocus.value;
      isFocus.value && inpRef.value.handleFocus();
    };
    const onClickOutside = () => (isFocus.value = false);
    const onMouseleave = () => !isFocus.value && inpRef.value.handleBlur();

    const setValue = () => {
      currentSelect.value = props.modelValue;
      currentSelect.label = valueMap.value[currentSelect.value];
    };
    watch(
      () => valueMap.value,
      () => setValue(),
      {
        immediate: true,
        deep: true,
      }
    );

    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleTrigger, 100));
      });
    });

    onBeforeUnmount(() => {
      off(window, "resize", handleTrigger);
    });

    /** 展开/收起选项面板 */
    const handleTrigger = () => {
      const rect = selectRef.value?.getBoundingClientRect();
      if (!rect) return;

      optionBoxRef.value.setAttribute(
        "style",
        `display: ${isFocus.value ? "block" : "none"};
         width: ${rect.width}px;
         left: ${rect.left}px;
         top: ${rect.top + rect.height + document.documentElement.scrollTop}px;`
      );
    };

    return {
      name,
      selectRef,
      inpRef,
      optionBoxRef,
      currentSelect,
      isFocus,
      clsName,
      handleClick,
      onClickOutside,
      onMouseleave,
    };
  },
});
</script>
