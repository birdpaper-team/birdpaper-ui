<template>
  <div :class="[name, `${name}-status-${status}`]" @click.stop="handleClick">
    <a :class="`${name}-inner`" :href="href">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts" name="Link">
import { PropType } from "vue";
import { LinkStatus } from "./types";

const props = defineProps({
  href: { type: String, default: "javascript:;" },
  status: { type: String as PropType<LinkStatus>, default: "primary" },
});
const emits = defineEmits<{
  click: [];
}>();
const name = "bp-link";

const handleClick = () => emits("click");
</script>
