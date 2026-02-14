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
        <input
          v-model="inputBegin"
          :disabled
          :placeholder="placeholder[0]"
          @blur="handleInputCommit('begin')"
          @keydown.enter.prevent="handleInputCommit('begin')"
        />
        <div class="split">-</div>
        <input
          v-model="inputEnd"
          :disabled
          :placeholder="placeholder[1]"
          @blur="handleInputCommit('end')"
          @keydown.enter.prevent="handleInputCommit('end')"
        />
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
import { ref, provide, computed, watch } from "vue";
import { rangeInjectionKey } from "./types";
import { RangePickerProps, rangePickerProps } from "./props";
import dayjs from "dayjs";

defineOptions({ name: "DateRangePicker" });
const { clsBlockName } = useNamespace("date-range-picker");

const model = defineModel<string[]>({ default: [] });
const props: RangePickerProps = defineProps({ ...rangePickerProps });

const inputValues = ref<[string, string]>([model.value[0] || "", model.value[1] || ""]);
const inputBegin = computed({
  get: () => inputValues.value[0],
  set: (val: string) => {
    inputValues.value[0] = val;
  },
});
const inputEnd = computed({
  get: () => inputValues.value[1],
  set: (val: string) => {
    inputValues.value[1] = val;
  },
});

watch(
  () => [model.value?.[0], model.value?.[1]] as const,
  (val) => {
    inputValues.value = [val?.[0] || "", val?.[1] || ""];
  }
);

const cls = computed<string[] | {}[]>(() => [
  clsBlockName,
  `${clsBlockName}-${props.size}`,
  props.disabled ? `${clsBlockName}-disabled` : "",
]);

const showPopup = ref<boolean>(false);
provide(rangeInjectionKey, {
  type: "range",
  model: model as unknown as string[],
  langs: props.langs,
  valueFormat: props.valueFormat,
  disableDate: props.disabledDate,
  onSelect: (v: string[], payload: any, closePopup = true) => {
    if (closePopup) showPopup.value = false;
  },
});

const normalizeInput = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (!dayjs(trimmed).isValid()) return "";
  const normalized = dayjs(trimmed).format(props.valueFormat);
  if (props.disabledDate && props.disabledDate(normalized)) return "";
  return normalized;
};

const handleInputCommit = (source: "begin" | "end") => {
  let begin = normalizeInput(inputValues.value[0]);
  let end = normalizeInput(inputValues.value[1]);

  if (begin && end && begin > end) {
    if (source === "begin") {
      end = "";
    } else {
      begin = "";
    }
  }

  inputValues.value = [begin, end];
  model.value = [begin, end];
};
</script>
