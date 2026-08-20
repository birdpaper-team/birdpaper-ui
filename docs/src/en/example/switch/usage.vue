<template>
  <usage-block title="Switch">
    <template #demo>
      <bp-switch v-bind="cfg"> </bp-switch>
    </template>
    <template #config>
      <div class="config-item">
        <bp-input v-model="cfg.checkText" size="small" placeholder="check-text"></bp-input>
      </div>
      <div class="config-item">
        <bp-input v-model="cfg.uncheckText" size="small" placeholder="uncheck-text"></bp-input>
      </div>
      <div class="config-item">
        <label>Disabled</label>
        <bp-switch size="mini" v-model="cfg.disabled"></bp-switch>
      </div>
      <div class="config-item">
        <label>Size</label>
        <bp-select size="mini" v-model="cfg.size" style="width: 90px">
          <bp-option value="mini">Mini</bp-option>
          <bp-option value="small">Small</bp-option>
        </bp-select>
      </div>
    </template>
  </usage-block>
</template>

<script setup lang="ts">
import { ref } from "vue";
import usageBlock from "../../../.vitepress/components/usage-block/src/usage-block.vue";

const cfg = ref({
  disabled: false,
  checkText: "",
  uncheckText: "",
  size: "small",
});
</script>
