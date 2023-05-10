<template>
  <li :class="`${name}-item ${name}-sizes`">
    <bp-select v-model="val" style="width: 100px" @change="onChange">
      <bp-option v-for="v in list" :value="v.value">{{ v.label }}</bp-option>
    </bp-select>
  </li>
</template>

<script setup lang="ts" name="PaginationSizes">
import { PropType, ref, watchEffect } from "vue";

const props = defineProps({
  currentSize: { type: Number, default: "" },
  sizesList: { type: Array as PropType<number[]>, default: () => [] },
  tmpString: { type: String, default: "" },
});

const emits = defineEmits<{
  (e: "change", size: number): void;
}>();

const name = "bp-pagination";
const val = ref(props.currentSize || props.sizesList[0] || 10);
const paramsStr = "{value}";
const list = ref<{ label: string; value: number }[]>([]);

const onChange = (v: number) => {
  emits("change", v);
};

watchEffect(() => {
  for (let i = 0; i < props.sizesList.length; i++) {
    const value = props.sizesList[i];
    const label = `${props.tmpString.replace(paramsStr, value as unknown as string)}`;
    list.value.push({ label, value });
  }
});
</script>
