<template>
  <div :class="cls">
    <div :class="`${name}-perfix`" v-if="slots.perfix">
      <slot name="perfix"></slot>
    </div>
    <input ref="inpRef" :class="`${clsBlockName}-inner`" :spellcheck="false" :name :type :disabled :placeholder :maxlength :value="model" @focus="onFocus" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { InputProps, inputProps } from "./props";
import { computed, useSlots, ref } from "vue";

defineOptions({ name: "Input" });
const { clsBlockName } = useNamespace("input");

const model = defineModel<string | number>({
  required: true,
  default: "",
});
const props: InputProps = defineProps(inputProps);
const slots = useSlots();

const cls = computed(() => [clsBlockName, `${clsBlockName}-${props.size}`]);

const inpRef = ref<HTMLInputElement>();

const isFocus = ref<boolean>(false);
const handleFocus = () => inpRef.value?.focus();
const onFocus = () => {};

const onInput = (e: Event) => {
  model.value = (e.target as HTMLInputElement).value;
};
</script>
