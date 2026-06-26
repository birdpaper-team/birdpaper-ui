<template>
  <li :class="cls">
    <bp-select v-model="val" :disabled :size @change="onChange">
      <bp-option v-for="v in list" :value="v.value">{{ v.label }}</bp-option>
    </bp-select>
  </li>
</template>

<script setup lang="ts">
import BpSelect, { SelectValue } from "@birdpaper-ui/components/select/index";
import BpOption from "@birdpaper-ui/components/select/src/components/option.vue";
import { computed, PropType, ref, watchEffect } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { InputSize } from "@birdpaper-ui/components/input/src/types";

const { clsBlockName } = useNamespace("pagination-sizes");

const props = defineProps({
  /**
   * @type Number
   * @description: The current size.
   * @default 10
   */
  currentSize: { type: Number, default: "" },
  /**
   * @type InputSize
   * @description Pagination sizes.
   * @default default
   */
  size: { type: String as PropType<InputSize>, default: "default" },
  /**
   * @type Boolean
   * @description: Whether the button is disabled.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type Array
   * @description: The sizes list.
   * @default []
   */
  sizesList: { type: Array as PropType<number[]>, default: () => [] },
  /**
   * @type String
   * @description: The template string.
   * @default ""
   */
  tmpString: { type: String, default: "" },
  /**
   * @type String
   * @description: The extra class name.
   * @default ""
   */
  extraClass: { type: String, default: "" },
});

const emits = defineEmits<{
  (e: "change", size: number): void;
}>();

const cls = computed(() => [clsBlockName.value, props.extraClass]);

const val = ref(props.currentSize || props.sizesList[0] || 10);
const paramsStr = "{value}";
const list = ref<{ label: string; value: number }[]>([]);

const onChange = (v: SelectValue) => {
  emits("change", Number(v));
};

watchEffect(() => {
  for (let i = 0; i < props.sizesList.length; i++) {
    const value = props.sizesList[i];
    const label = `${props.tmpString.replace(paramsStr, value.toString())}`;
    list.value.push({ label, value });
  }
});
</script>
