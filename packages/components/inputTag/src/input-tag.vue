<template>
  <bp-input :class="cls" @click.stop="inpRef?.focus()" :disabled>
    <div :class="`${clsBlockName}-content`">
      <template v-for="(v, k) in model">
        <bp-tag v-if="maxTagCount === 0 || k < maxTagCount" :closeable="!disabled" @close="handleClose(k)">
          {{ v.toString() }}
        </bp-tag>
      </template>
      <bp-tag v-if="maxTagCount && model.length > maxTagCount">+{{ model.length - maxTagCount }}...</bp-tag>

      <input
        v-if="!disabled || model.length === 0"
        ref="inpRef"
        type="text"
        v-model="inpVal"
        :style="`width: ${inpWidth}px`"
        :class="`${clsBlockName}-content-inner`"
        :name
        :placeholder
        :disabled
        @keyup.enter="handleEnter"
        @keyup.backspace="handleBackspace"
      />
      <span ref="hiddenSpan" class="hidden-span">{{ inpVal || placeholder }}</span>
    </div>
  </bp-input>
</template>

<script setup lang="ts">
import bpTag from "@birdpaper-ui/components/tag";
import bpInput from "@birdpaper-ui/components/input";
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { InputTagProps, inputTagProps } from "./props";

defineOptions({ name: "InputTag" });
const { clsBlockName } = useNamespace("input-tag");

const model = defineModel<string[]>({ default: [] });
const props: InputTagProps = defineProps(inputTagProps);

const cls = computed<string[] | {}[]>(() => [clsBlockName, props.disabled && `${clsBlockName}-disabled`]);

const inpVal = ref<string>("");
const inpRef = ref<HTMLInputElement | null>(null);
const hiddenSpan = ref<HTMLElement | null>(null);

const inpWidth = ref<number>(0);
const updateWidth = () => {
  if (!hiddenSpan.value) {
    inpWidth.value = 0;
    return;
  }

  inpWidth.value = hiddenSpan.value.offsetWidth + 8;
};
watch([() => inpVal.value, () => props.placeholder], () => {
  nextTick(() => updateWidth());
});

onMounted(() => {
  nextTick(() => updateWidth());
});

const handleEnter = () => {
  if (!inpVal.value) return;

  model.value.push(inpVal.value);
  inpVal.value = "";
};
const handleBackspace = () => {
  if (inpVal.value) return;

  model.value.pop();
};

const handleClose = (index: number) => {
  model.value.splice(index, 1);
};
</script>
