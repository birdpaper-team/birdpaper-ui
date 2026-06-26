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
    <bp-input ref="inpRef" readonly v-model="model" :name :class="cls" :placeholder :disabled :clearable :size>
      <template #suffix>
        <IconCalendarLine />
      </template>
    </bp-input>
    <template #content>
      <picker-panel />
    </template>
  </bp-trigger>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import BpInput from "@birdpaper-ui/components/input/index";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { computed, provide, ref } from "vue";
import { commonPickerProps, datePickerProps, DatePickerProps } from "./props";
import { IconCalendarLine } from "birdpaper-icon";
import pickerPanel from "./components/picker-panel.vue";
import { dateInjectionKey } from "./types";

defineOptions({ name: "DatePicker" });
const { clsBlockName } = useNamespace("date-picker");

const model = defineModel<string>({ default: "" });
const props: DatePickerProps = defineProps({ ...commonPickerProps, ...datePickerProps });

const cls = computed<string[] | {}[]>(() => [clsBlockName.value, `${clsBlockName.value}-${props.size}`]);

const showPopup = ref<boolean>(false);
provide(dateInjectionKey, {
  type: "date",
  model: model as unknown as string,
  langs: props.langs,
  valueFormat: props.valueFormat,
  showTime: props.showTime,
  disableDate: props.disabledDate,
  onSelect: (v: string, payload: any, closePopup = true) => {
    model.value = v;

    if (closePopup) showPopup.value = false;
  },
});
</script>
