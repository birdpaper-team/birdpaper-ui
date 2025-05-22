<template>
  <bp-trigger
    v-model="showPopup"
    transition="fade-dropdown"
    :hideTrigger
    :disabled
    :popup-offset="10"
    position="bottom-left"
    update-at-scroll
  >
    <div :class="cls">
      <div :class="`${clsBlockName}-input`">
        <input v-model="model[0]" :disabled :placeholder="placeholder[0]" />
        <div class="split">-</div>
        <input v-model="model[1]" :disabled :placeholder="placeholder[1]" />
      </div>

      <div :class="`${clsBlockName}-suffix`">
        <IconCalendarLine />
      </div>
    </div>
    <template #content>
      <picker-panel type="range" />
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import pickerPanel from "./components/picker-panel.vue";
import { ref, provide, computed } from "vue";
import { rangeInjectionKey } from "./types";
import { RangePickerProps, rangePickerProps } from "./props";

defineOptions({ name: "DateRangePicker" });
const { clsBlockName } = useNamespace("date-range-picker");

const model = defineModel<string[]>({ default: [] });
const props: RangePickerProps = defineProps({ ...rangePickerProps });

const cls = computed<string[] | {}[]>(() => [
  clsBlockName,
  `${clsBlockName}-${props.size}`,
  props.disabled ? `${clsBlockName}-disabled` : "",
]);

const showPopup = ref<boolean>(false);
provide(rangeInjectionKey, {
  type: "range",
  model: model as unknown as string[],
  langs: "zh-cn",
  valueFormat: "YYYY-MM-DD",
  onSelect: (v: string[], payload: any, closePopup = true) => {
    if (closePopup) showPopup.value = false;
  },
});
</script>
