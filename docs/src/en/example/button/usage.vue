<template>
  <usage-block title="Button">
    <template #demo>
      <bp-button v-bind="cfg">
        {{ cfg.content }}
      </bp-button>
    </template>
    <template #config>
      <div class="config-item">
        <bp-input v-model="cfg.content" size="small" placeholder="Content"></bp-input>
      </div>
      <div class="config-item">
        <label>Full</label>
        <bp-switch size="mini" v-model="cfg.full"></bp-switch>
      </div>
      <div class="config-item">
        <label>Disabled</label>
        <bp-switch size="mini" v-model="cfg.disabled"></bp-switch>
      </div>
      <div class="config-item">
        <label>Loading</label>
        <bp-switch size="mini" v-model="cfg.loading"></bp-switch>
      </div>
      <div class="config-item">
        <label>Shape</label>
        <bp-select size="mini" v-model="cfg.shape" style="width: 80px">
          <bp-option value="square">Square</bp-option>
          <bp-option value="round">Round</bp-option>
          <bp-option value="circle">Circle</bp-option>
        </bp-select>
      </div>
      <div class="config-item">
        <label>Status</label>
        <bp-select size="mini" v-model="cfg.status" style="width: 80px">
          <bp-option value="gray">Gary</bp-option>
          <bp-option value="primary">Primary</bp-option>
          <bp-option value="success">Success</bp-option>
          <bp-option value="warning">Warning</bp-option>
          <bp-option value="danger">Danger</bp-option>
        </bp-select>
      </div>
      <div class="config-item">
        <label>Type</label>
        <bp-select size="mini" v-model="cfg.type" style="width: 90px">
          <bp-option value="secondary">Secondary</bp-option>
          <bp-option value="normal">Normal</bp-option>
          <bp-option value="plain">Plain</bp-option>
          <bp-option value="dashed">Dashed</bp-option>
          <bp-option value="text">Text</bp-option>
        </bp-select>
      </div>
      <div class="config-item">
        <label>Size</label>
        <bp-select size="mini" v-model="cfg.size" style="width: 90px">
          <bp-option value="mini">Mini</bp-option>
          <bp-option value="small">Small</bp-option>
          <bp-option value="default">Default</bp-option>
          <bp-option value="large">Large</bp-option>
        </bp-select>
      </div>
    </template>
  </usage-block>
</template>

<script setup lang="ts">
import { ref } from "vue";
import usageBlock from "../../../.vitepress/components/usage-block/src/usage-block.vue";

const cfg = ref({
  content: "Submit",
  full: false,
  disabled: false,
  loading: false,
  shape: "square",
  status: "primary",
  type: "normal",
  size: "default",
});
</script>
