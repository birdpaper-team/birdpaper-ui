<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${clsBlockName}-inner`" />

    <div :class="[`${clsBlockName}-slider`, isCheck ? `${clsBlockName}-check` : '']">
      <span v-if="checkText || uncheckText" :class="`${clsBlockName}-slider-inner`">
        {{ isCheck ? checkText : uncheckText }}
      </span>
      <span :class="`${clsBlockName}-slider-dot`">
        <Transition name="fade">
          <IconLoaderLine v-if="loading" class="bp-icon-loading" size="14"></IconLoaderLine>
        </Transition>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, ref } from "vue";
import { switchProps, SwitchProps } from "./props";
import { SwitchValue } from "./types";
import { IconLoaderLine } from "birdpaper-icon";

defineOptions({ name: "Switch" });
const { clsBlockName } = useNamespace("switch");

const model = defineModel<SwitchValue>({ default: false });
const props: SwitchProps = defineProps(switchProps);

const cls = computed(() => [
  clsBlockName,
  "select-none",
  `${clsBlockName}-${props.size}`,
  (props.disabled || loading.value) && `${clsBlockName}-disabled`,
]);

const isCheck = computed(() => model.value === props.checkValue);

const loading = ref<boolean>(false);
const handleClick = async () => {
  if (props.disabled || loading.value) return;

  try {
    loading.value = true;
    const res = await props.onBeforeOk();
    if (!res) return;

    model.value = isCheck.value ? props.uncheckValue : props.checkValue;
  } catch (error) {
    console.log("[ Switch -onBeforeOk error]", error);
  } finally {
    loading.value = false;
  }
};
</script>
