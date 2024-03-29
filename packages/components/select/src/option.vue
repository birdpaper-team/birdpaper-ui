<template>
  <li :class="clsName" @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { PropType, inject, reactive, ref, useSlots, watch } from "vue";
import { SelectBindValue, SelectContext, SelectOption, selectInjectionKey } from "./type";
import { defineComponent } from "vue";
import { computed } from "vue";

export default defineComponent({
  name: "Option",
  props: {
    /** 选项的值 */
    value: { type: [String, Number] as PropType<SelectBindValue>, default: "" },
    /** 选项文本内容 */
    label: { type: String, default: "" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
    const name = "bp-option";
    const ctx = ref<SelectContext>();
    const slot = useSlots();
    const option = reactive<SelectOption>(new SelectOption());

    const init = () => {
      ctx.value = inject(selectInjectionKey, null);

      option.label = props.label || (slot.default?.()[0].children as string);
      option.value = props.value;
    };

    const clsName = computed(() => {
      let cls = [`${name}-item`];
      if (ctx.value.currentSelect.value === props.value) cls.push(`${name}-active`);
      if(props.disabled) cls.push(`${name}-disabled`);

      return cls;
    });

    const handleClick = () => {
      if (props.disabled) return;

      ctx.value?.onSelect(option.value, { ...option });
    };

    watch(
      () => props,
      () => {
        init();
      },
      {
        immediate: true,
      }
    );

    return {
      name,
      clsName,
      handleClick,
    };
  },
});
</script>
