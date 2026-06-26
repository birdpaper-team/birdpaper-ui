<template>
  <form :class="cls" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, provide, reactive, ref, toRefs } from "vue";
import { FormProps, formProps } from "./props";
import type { FormItemContext } from "./types";
import { formContextKey, type FormContext } from "./types";
import Schema from "async-validator";

defineOptions({ name: "Form" });

const emits = defineEmits(["submit"]);
const { clsBlockName } = useNamespace("form");
const cls = computed(() => [clsBlockName.value, `${clsBlockName.value}-${layout.value}`]);

// props and refs
const props: FormProps = defineProps(formProps);
const { layout } = toRefs(props as any);

// registered form item contexts
const fields = ref<FormItemContext[]>([]);

// record initial model values for resetFields
const initialValues = ref<Record<string, any>>({});

// deep clone initial values when component mounts
if (props.model) {
  try {
    initialValues.value = structuredClone(props.model);
  } catch {
    initialValues.value = JSON.parse(JSON.stringify(props.model));
  }
}

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

provide(formContextKey, formContext);

// validate a single field with async-validator
async function validateField(fieldOrCtx: FormItemContext | string): Promise<boolean> {
  let ctx: FormItemContext | undefined;
  let fieldName: string;

  // Determine if we received a field name string or a context object
  if (typeof fieldOrCtx === "string") {
    fieldName = fieldOrCtx;
    ctx = fields.value.find((item) => item.field === fieldName);
    if (!ctx) return true; // Field not found, consider validation passed
  } else {
    ctx = fieldOrCtx;
    fieldName = ctx.field || "";
    if (!fieldName) return true;
  }

  const rules = ctx.getRules?.() || (props.rules && props.rules[fieldName]);
  if (!rules) return true;

  const schema = new Schema({ [fieldName]: rules });
  try {
    await schema.validate({ [fieldName]: props.model[fieldName] });
    ctx.updateError("");
    return true;
  } catch (errors: any) {
    ctx.updateError(errors.errors?.[0]?.message || String(errors));
    console.warn("Form validate error: ", errors.errors?.[0]?.message || String(errors));
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
      const initial = initialValues.value[item.field];
      props.model[item.field] = initial !== undefined ? initial : "";
      item.clearValidate();
    }
  });
}

// handle form submit
async function onSubmit() {
  const isValid = await validate();
  emits("submit", { isValid, model: props.model });
}

defineExpose({ validate, clearValidate, resetFields });
</script>
