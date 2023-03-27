<template>
  <div class="bp-input">
    <input type="text" class="bp-input-inner" />
  </div>
</template>

<script setup lang="ts" name="input">
import { PropType } from "vue";
import { InputSize } from "./types";

const props = defineProps({
  /** 输入框尺寸 Size of the input */
  size: { type: String as PropType<InputSize>, default: "normal" },
  /** 是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
  /** 是否只读状态 Readonly or not */
  readonly: { type: Boolean, default: false },
  /** 是否错误状态 Error or not */
  isError: { type: Boolean, default: false },
});
</script>
