<template>
  <div :class="[clsBlockName, labelPositionClass]">
    <label v-if="label" :for="field" :class="`${clsBlockName}-label`" :style="labelStyle">
      {{ label }}
      {{ showColon ? ":" : "" }}
    </label>
    <div :class="`${clsBlockName}-content`">
      <div :class="`${clsBlockName}-content-inner`">
        <slot />
      </div>
      <transition name="fade-dropdown" mode="out-in">
        <div v-if="errorMessage" :class="`${clsBlockName}-content-error`">
          {{ errorMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, inject, onMounted, onBeforeUnmount, ref, watch, PropType } from "vue";
import { FormItemProps, formItemProps } from "../props";
import type { FormContext, FormItemContext } from "../types";

defineOptions({ name: "FormItem" });
const { clsBlockName } = useNamespace("form-item");

const props: FormItemProps = defineProps(formItemProps);

const formContext = inject<FormContext>("formContext");
const errorMessage = ref("");

watch(
  () => props.field && formContext?.model[props.field],
  () => {
    if (errorMessage.value) {
      errorMessage.value = "";
    }
  }
);

const formItemContext: FormItemContext = {
  field: props.field,
  validate: async () => {
    if (!formContext || !props.field) return {};
    return {};
  },
  clearValidate: () => {
    errorMessage.value = "";
  },
  updateError: (error: string) => {
    errorMessage.value = error;
  },
  getRules: () => {
    if (props.rules) {
      return props.rules;
    }
    if (formContext?.rules && props.field) {
      return formContext.rules[props.field];
    }
    return undefined;
  },
};

onMounted(() => {
  if (formContext && props.field) {
    formContext.addField(formItemContext);
  }
});

onBeforeUnmount(() => {
  if (formContext && props.field) {
    formContext.removeField(formItemContext);
  }
});

const labelStyle = computed(() => {
  if (!formContext) return {};
  if (props.width) {
    return {
      width: typeof props.width === "number" ? `${props.width}px` : props.width,
    };
  }
  return {
    width: typeof formContext.labelWidth === "number" ? `${formContext.labelWidth}px` : formContext.labelWidth,
  };
});

const labelPositionClass = computed(() => {
  if (!formContext) return "";
  return `${clsBlockName}-label-${formContext.labelPosition}`;
});
</script>
