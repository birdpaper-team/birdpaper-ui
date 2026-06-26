<template>
  <bp-trigger
    v-model="showPopup"
    :class="clsBlockName"
    transition="fade-dropdown"
    :hideTrigger
    :disabled
    :popup-offset="10"
    position="bottom-left"
    update-at-scroll
  >
    <bp-input
      ref="inpRef"
      readonly
      v-model="model"
      :class="cls"
      :placeholder
      :disabled
      :clearable
      :size
      @input="onInput"
      @blur="onBlur"
    >
      <template #prefix>
        <IconTimeLine />
      </template>
    </bp-input>
    <template #content>
      <div :class="`${clsBlockName}-panel select-none`">
        <div :class="`${clsBlockName}-panel-wrapper`">
          <time-table />
        </div>
      </div>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpInput from "@birdpaper-ui/components/input/index";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { IconTimeLine } from "birdpaper-icon";
import { timePickerProps, TimePickerProps } from "./props";
import { computed, provide, ref } from "vue";
import timeTable from "./components/time-table.vue";
import { timeInjectionKey } from "./types";

defineOptions({ name: "TimePicker" });
const { clsBlockName } = useNamespace("timePicker");

const model = defineModel<string>({ default: "" });
const props: TimePickerProps = defineProps(timePickerProps);
const emits = defineEmits(["input", "blur"]);

const cls = computed<string[] | {}[]>(() => [clsBlockName.value, `${clsBlockName.value}-${props.size}`]);

const showPopup = ref<boolean>(false);
provide(timeInjectionKey, {
  modelValue: model as unknown as string,
  onSelect: (v: string, payload: any) => {
    model.value = v;
    showPopup.value = false;
  },
});

const onInput = () => emits("input");
const onBlur = () => emits("blur");
</script>
