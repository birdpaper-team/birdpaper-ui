<template>
  <usage-block title="Radio">
    <template #demo>
      <div>
        <p class="font-size-13px opacity60">value：{{ model }}</p>
        <bp-radio-group v-model="model" v-bind="groupCfg">
          <template v-for="v in optionList">
            <bp-radio :value="v">{{ v }}</bp-radio>
          </template>
        </bp-radio-group>
      </div>
    </template>
    <template #config>
      <div class="config-item">
        <label>Disabled</label>
        <bp-switch size="mini" v-model="groupCfg.disabled"></bp-switch>
      </div>
      <div class="config-item">
        <label>Type</label>
        <bp-select size="mini" v-model="groupCfg.type" style="width: 80px">
          <bp-option value="radio">Radio</bp-option>
          <bp-option value="button">Button</bp-option>
        </bp-select>
      </div>
      <div class="config-item">
        <label>Size</label>
        <bp-select size="mini" v-model="groupCfg.size" style="width: 90px">
          <bp-option value="mini">Mini</bp-option>
          <bp-option value="small">Small</bp-option>
          <bp-option value="default">Default</bp-option>
          <bp-option value="large">Large</bp-option>
        </bp-select>
      </div>
      <div class="config-item" v-for="(v, k) in optionList">
        <label>Option {{ k + 1 }}</label>
        <bp-input size="small" v-model="optionList[k]" style="width: 100px"></bp-input>
      </div>
      <div class="config-item justify-center!">
        <bp-button :icon="IconAddFill" size="small" type="text" @click="handleAdd">Add Option</bp-button>
      </div>
    </template>
  </usage-block>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconAddFill } from "birdpaper-icon";
import usageBlock from "../../../.vitepress/components/usage-block/src/usage-block.vue";

const model = ref("option 1");

const groupCfg = ref({
  disabled: false,
  type: "Radio",
  size: "default",
});
const optionList = ref(["option 1", "option 2"]);

const handleAdd = () => optionList.value.push("");
</script>
