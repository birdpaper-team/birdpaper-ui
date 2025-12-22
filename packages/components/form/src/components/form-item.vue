<template>
  <div :class="[clsBlockName, labelPositionClass]">
    <label :for="field" :class="`${clsBlockName}-label`" :style="labelStyle">
      <strong v-if="required" :class="`${clsBlockName}-label-required-symbol`">*</strong>
      {{ label }}
      {{ showColon ? ":" : "" }}
    </label>
    <div :class="`${clsBlockName}-content`">
      <div :class="`${clsBlockName}-content-inner`" @focusout="handleFocusOut">
        <slot />
      </div>
      <Transition name="fade-dropdown" mode="out-in">
        <div v-if="errorMessage" :class="`${clsBlockName}-content-error`">
          {{ errorMessage }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, inject, onMounted, onBeforeUnmount, ref, watch, toRefs, type ExtractPropTypes, Transition } from "vue";
import { formItemProps } from "../props";
import type { FormItemProps } from "../props";
import type { FormContext, FormItemContext } from "../types";

defineOptions({ name: "FormItem" });

const { clsBlockName } = useNamespace("form-item");

// typed props
type Props = Readonly<ExtractPropTypes<typeof formItemProps>> & FormItemProps;
const props = defineProps(formItemProps) as Props;
const { field } = toRefs(props as any);

// form context may be undefined
const formContext = inject<FormContext | null>("formContext", null);

// local state for error message
const errorMessage = ref<string>("");

// Clear error when the related model value changes
watch(
  () => (field.value ? formContext?.model?.[field.value] : undefined),
  () => {
    if (errorMessage.value) errorMessage.value = "";
  }
);

// Helpers used by form context
async function validate(): Promise<boolean> {
  if (!formContext || !field.value) return true;
  
  // Get validation rules
  const rules = getRules();
  if (!rules) return true;
  
  try {
    // Create schema and validate
    const Schema = (await import('async-validator')).default;
    const schema = new Schema({ [field.value]: rules });
    await schema.validate({ [field.value]: formContext.model[field.value] });
    
    // Validation passed
    updateError('');
    return true;
  } catch (errors: any) {
    // Validation failed
    const errorMsg = errors.errors?.[0]?.message || String(errors);
    updateError(errorMsg);
    console.warn('FormItem validate error: ', errorMsg);
    return false;
  }
}

function clearValidate() {
  errorMessage.value = "";
}

function updateError(error: string) {
  errorMessage.value = error;
}

function getRules() {
  if (props.rules) return props.rules;
  if (formContext?.rules && field.value) return formContext.rules[field.value];
  return undefined;
}

const formItemContext: FormItemContext = {
  field: props.field,
  validate,
  clearValidate,
  updateError,
  getRules,
};

onMounted(() => {
  if (formContext && field.value) {
    formContext.addField(formItemContext);
  }
});

onBeforeUnmount(() => {
  if (formContext && field.value) {
    formContext.removeField(formItemContext);
  }
});

// label style
const labelStyle = computed(() => {
  if (props.width) {
    return {
      width: typeof props.width === "number" ? `${props.width}px` : props.width,
    };
  }

  const width = formContext?.labelWidth;
  return width !== undefined
    ? { width: typeof width === "number" ? `${width}px` : width }
    : {};
});

// label position class
const labelPositionClass = computed(() => `${clsBlockName}-label-${formContext?.labelPosition ?? "left"}`);

// Handle focusout event for auto validation
const handleFocusOut = () => {
  if (props.autoValidate) {
    validate();
  }
};
</script>
