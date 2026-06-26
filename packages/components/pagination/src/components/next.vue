<template>
  <li :class="cls" @click="handleClick">
    <span v-if="text" v-text="text"></span>
    <IconArrowRightSLine v-else size="16px" />
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { IconArrowRightSLine } from "birdpaper-icon";
import { computed } from "vue";

const { clsBlockName } = useNamespace("pagination-next");

const props = defineProps({
  /**
   * @type String
   * @description: The text content.
   * @default ""
   */
  text: { type: String, default: "" },
  /**
   * @type Boolean
   * @description: Whether the button is disabled.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type String
   * @description: The extra class name.
   * @default ""
   */
  extraClass: { type: String, default: "" },
});

const emits = defineEmits<{
  (e: "click"): void;
}>();

const cls = computed(() => [
  clsBlockName.value,
  props.disabled ? `${clsBlockName.value}-disabled` : "",
  props.extraClass,
]);

const handleClick = () => {
  if (props.disabled) return;

  emits("click");
};
</script>
