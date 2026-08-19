<template>
  <form :class="cls" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, onMounted, provide, reactive, ref, toRefs, watch } from "vue";
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
const { layout, labelWidth, labelPosition, rules: formRules } = toRefs(props as any);

// registered form item contexts
const fields = ref<FormItemContext[]>([]);

// record initial model values for resetFields
const initialValues = ref<Record<string, any>>({});

function deepClone<T>(val: T): T {
  if (val === undefined || val === null) return val;
  try {
    return structuredClone(val);
  } catch {
    return JSON.parse(JSON.stringify(val));
  }
}

function snapshotInitialValues(model?: Record<string, any>) {
  if (!model) {
    initialValues.value = {};
    return;
  }
  initialValues.value = deepClone(model);
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
  rules: formRules,
  labelWidth,
  labelPosition,
  addField,
  removeField,
});

provide(formContextKey, formContext);

// Keep formContext.model in sync when props.model is replaced
watch(
  () => props.model,
  (model, prev) => {
    formContext.model = model;
    // Snapshot when model identity changes
    if (model !== prev) {
      snapshotInitialValues(model);
    }
  }
);

onMounted(() => {
  snapshotInitialValues(props.model);
});

// validate a single field with async-validator
async function validateField(fieldOrCtx: FormItemContext | string): Promise<boolean> {
  let ctx: FormItemContext | undefined;
  let fieldName: string;

  // Determine if we received a field name string or a context object
  if (typeof fieldOrCtx === "string") {
    fieldName = fieldOrCtx;
    ctx = fields.value.find((item) => item.field === fieldName);
    if (!ctx) return false; // Field not found
  } else {
    ctx = fieldOrCtx;
    fieldName = ctx.field || "";
    if (!fieldName) return false;
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
      if (Object.prototype.hasOwnProperty.call(initialValues.value, item.field)) {
        props.model[item.field] = deepClone(initialValues.value[item.field]);
      } else {
        props.model[item.field] = undefined;
      }
      item.clearValidate();
    }
  });
}

// handle form submit
async function onSubmit() {
  const isValid = await validate();
  emits("submit", { isValid, model: props.model });
}

defineExpose({ validate, clearValidate, resetFields, validateField });
</script>
