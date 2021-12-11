<template>
  <bp-row :class="['bp-form', { 'bp-form-inline': inline }]">
    <bp-col span="24">
      <slot></slot>
    </bp-col>
  </bp-row>
</template>

<script>
export default {
  name: "bp-form",
  props: {
    model: { type: Object, default: () => {} }, // TODO
    rules: { type: Object, default: () => {} }, // TODO
    layout: { type: String, default: "" }, // TODO
    labelAlign: { type: String, default: "" }, // TODO
    inline: { type: Boolean, default: false }, // TODO
  },
  setup() {},
};
</script>
