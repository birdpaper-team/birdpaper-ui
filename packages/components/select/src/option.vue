<template>
  <li :class="`${name}-item`" @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { PropType, inject, reactive, ref, useSlots, watch } from "vue";
import { SelectBindValue, SelectContext, SelectOption, selectInjectionKey } from "./type";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Option",
  props: {
    value: { type: [String, Number, Boolean] as PropType<SelectBindValue>, default: "" },
    label: { type: String, default: "" },
  },
  setup(props) {
    const name = "bp-option";
    const ctx = ref<SelectContext>();
    const slot = useSlots();
    const option = reactive<SelectOption>(new SelectOption());

    const setup = () => {
      ctx.value = inject(selectInjectionKey, null);

      option.label = props.label || (slot.default?.()[0].children as string);
      option.value = props.value;
    };

    const handleClick = () => {
      ctx.value?.onSelect(option.value, { ...option });
    };

    watch(
      () => props,
      () => {
        setup();
      },
      {
        immediate: true,
      }
    );

    return {
      name,
      handleClick,
    };
  },
});
</script>
