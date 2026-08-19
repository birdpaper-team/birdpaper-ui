<template>
  <div :class="cls">
    <div v-if="type === 'vertical' && !hideLine" :class="`${clsBlockName}-tail`"></div>

    <div :class="`${clsBlockName}-node`">
      <IconCheckFill v-if="status === 'finish'" size="16" />
      <template v-else> {{ index + 1 }} </template>
    </div>

    <div :class="`${clsBlockName}-content`">
      <div :class="`${clsBlockName}-title`">
        <slot />
      </div>
      <div v-if="description" :class="`${clsBlockName}-desc`">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { stepProps, StepProps } from "../props";
import { computed } from "vue";
import { IconCheckFill } from "birdpaper-icon";

defineOptions({ name: "Step" });
const { clsBlockName } = useNamespace("step");

const props: StepProps = defineProps(stepProps);

const cls = computed(() => {
  return [clsBlockName.value, `${clsBlockName.value}-${props.status}`];
});
</script>
