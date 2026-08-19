<template>
  <div
    :class="cls"
    role="switch"
    :aria-checked="isCheck"
    :aria-disabled="disabled || loading || undefined"
    :tabindex="disabled || loading ? -1 : 0"
    @click="handleClick"
    @keydown.space.prevent="handleClick"
    @keydown.enter.prevent="handleClick"
  >
    <input :id type="checkbox" :checked="isCheck" :disabled="disabled || loading" :class="`${clsBlockName}-inner`" tabindex="-1" />

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
import { computed, ref, Transition } from "vue";
import { switchProps, SwitchProps } from "./props";
import { SwitchValue } from "./types";
import { IconLoaderLine } from "birdpaper-icon";

defineOptions({ name: "Switch" });
const { clsBlockName } = useNamespace("switch");

const model = defineModel<SwitchValue>({ default: false });
const props: SwitchProps = defineProps(switchProps);

const cls = computed(() => [
  clsBlockName.value,
  "select-none",
  `${clsBlockName.value}-${props.size}`,
  (props.disabled || loading.value) && `${clsBlockName.value}-disabled`,
]);

const isCheck = computed(() => model.value === props.checkValue);

const loading = ref<boolean>(false);
const handleClick = async () => {
  if (props.disabled || loading.value) return;

  try {
    const result = props.onBeforeOk();
    // Only show loading while awaiting an async result
    if (result && typeof (result as PromiseLike<boolean>).then === "function") {
      loading.value = true;
      const res = await result;
      if (!res) return;
    } else if (!result) {
      return;
    }

    model.value = isCheck.value ? props.uncheckValue : props.checkValue;
  } catch (error) {
    console.warn("[ Switch -onBeforeOk error]", error);
  } finally {
    loading.value = false;
  }
};
</script>
