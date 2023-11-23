<template>
  <bp-trigger
    v-model:popup-visible="isFocus"
    transition="fade-dropdown"
    :class="clsName"
    :disabled="disabled"
    :popup-offset="10"
    auto-fit-width
  >
    <bp-input
      ref="inpRef"
      :disabled="disabled"
      v-model="currentSelect.label"
      readonly
      :placeholder="placeholder"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <template #suffix>
        <bp-icon
          v-if="!disabled && showClear && currentSelect.label"
          class="click-icon"
          name="ri-close-line"
          @click.stop="hancleClear"
        ></bp-icon>
        <bp-icon v-else :class="`${name}-icon-inner`" :name="`ri-arrow-${isFocus ? 'up' : 'down'}-s-line`"></bp-icon>
      </template>
    </bp-input>

    <template #content>
      <ul :class="`${name}-option-list`">
        <slot></slot>
      </ul>
    </template>
  </bp-trigger>
</template>

<script lang="ts">
import { PropType, provide, ref } from "vue";
import { SelectBindValue, selectInjectionKey } from "./type";
import { vClickOutside } from "../../../directives/clickOutside";
import { defineComponent } from "vue";
import BpInput from "../../input/src/input.vue";
import { watch } from "vue";
import { useSelect } from "./select";
import BpTrigger from "../../trigger/src/trigger";
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
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const name = "bp-select";
    const inpRef = ref();
    const showClear = ref<boolean>(false);

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

    const setValue = () => {
      currentSelect.value = props.modelValue;
      currentSelect.label = valueMap.value[currentSelect.value];
    };

    const handleMouseEnter = () => {
      if (!props.clearable) return;
      showClear.value = true;
    };
    const handleMouseLeave = () => {
      if (!props.clearable) return;
      showClear.value = false;
    };

    const hancleClear = () => {
      currentSelect.value = "";
      currentSelect.label = "";
    };

    watch(
      () => valueMap.value,
      () => setValue(),
      {
        immediate: true,
        deep: true,
      }
    );

    watch(
      () => props.modelValue,
      () => setValue()
    );

    return {
      name,
      inpRef,
      currentSelect,
      isFocus,
      clsName,
      handleMouseEnter,
      handleMouseLeave,
      showClear,
      hancleClear,
    };
  },
});
</script>
