<template>
  <form :class="cls" @submit.prevent>
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, provide, reactive, ref, toRefs } from "vue";
import { FormProps, formProps } from "./props";
import type { FormContext, FormItemContext } from "./types";
import Schema from "async-validator";

defineOptions({ name: "Form" });
const { clsBlockName } = useNamespace("form");
const cls = computed(() => [clsBlockName, `${clsBlockName}-${layout.value}`]);

// props and refs
const props: FormProps = defineProps(formProps);
const { layout } = toRefs(props as any);

// registered form item contexts
const fields = ref<FormItemContext[]>([]);

// helpers to manage fields
function addField(field: FormItemContext) {
  fields.value.push(field);
}

function removeField(ctx: FormItemContext) {
  if (!ctx.field) return;
  fields.value = fields.value.filter((item) => item !== ctx);
}

// provide context to child FormItem components
const formContext: FormContext = reactive({
  model: props.model,
  rules: props.rules,
  labelWidth: props.labelWidth,
  labelPosition: props.labelPosition,
  addField,
  removeField,
});


provide("formContext", formContext);

// validate a single field with async-validator
async function validateField(ctx: FormItemContext): Promise<boolean> {
  if (!ctx.field) return true;

  const rules = ctx.getRules?.() || (props.rules && props.rules[ctx.field]);
  if (!rules) return true;

  const schema = new Schema({ [ctx.field]: rules });
  try {
    await schema.validate({ [ctx.field]: props.model[ctx.field] });
    ctx.updateError("");
    return true;
  } catch (errors: any) {
    ctx.updateError(errors.errors?.[0]?.message || String(errors));
    return false;
  }
}

// validate all registered fields
async function validate(): Promise<boolean> {
  const results = await Promise.all(fields.value.map((f) => validateField(f)));
  return !results.includes(false);
}

// clear validation messages
function clearValidate(targetFields?: string[]) {
  fields.value.forEach((item) => {
    if (!targetFields || !item.field || targetFields.includes(item.field)) {
      item.clearValidate();
    }
  });
}

// reset model values for registered fields
function resetFields() {
  if (!props.model) return;
  fields.value.forEach((item) => {
    if (item.field) {
      props.model[item.field] = "";
      item.clearValidate();
    }
  });
}

defineExpose({ validate, clearValidate, resetFields });
</script>
