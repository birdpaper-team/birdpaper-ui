<template>
  <li :class="className" @click="onClick">
    <span v-if="text" class="page-text" v-text="text"></span>
    <i v-else class="page-icon ri-arrow-right-s-line"></i>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  text: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["click"]);

const className = computed(() => {
  let name = ["bp-page-item", "bp-next-page", { "page-item-disabled": props.disabled }];
  return name;
});

const onClick = () => {
  if (props.disabled) return;
  emit("click", "next");
};
</script>

<script>
export default { name: "bp-pagination-next" };
</script>
