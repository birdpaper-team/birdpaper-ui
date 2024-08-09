<template>
  <div :class="name">
    <div :class="`${name}-area`" v-if="demoComponent">
      <bp-button>Button</bp-button>
      <!-- <component :is="demoComponent"></component> -->
    </div>
    <div :class="`${name}-footer`">
      <demo-option></demo-option>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import demoOption from "./demo-option.vue";

const name = "demo-block";

/** 示例文件组件 */
const demoComponent = ref(true);
</script>
