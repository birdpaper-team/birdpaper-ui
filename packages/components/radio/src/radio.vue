<template>
  <div :class="name" @click="handleInput">
    <input type="radio" :class="`${name}-inner`" />

    <span :class="[`${name}-radio`, isCheck ? `${name}-check` : '']"></span>
    <span :class="`${name}-label`">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts" name="Radio">
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: [String, Number, Boolean], default: false },
  value: { type: [String, Number, Boolean], default: false },
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits<{
  (e: "update:modelValue", val: string | number | boolean): void;
}>();

const name = "bp-radio";

const handleInput = () => {
  emits("update:modelValue", props.value);
};

const isCheck = computed(() =>  props.modelValue === props.value);
</script>
