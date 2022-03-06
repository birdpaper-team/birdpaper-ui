<template>
  <div class="bp-pagination-jumper">
    <bp-input v-model.number="jumperValue" :disabled="disabled" @blur="handleJumperBlur"></bp-input>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, watchEffect } from 'vue';

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 }, // 当前激活页
  pages: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false }, // 是否禁用
});

const emit = defineEmits(["change"]);

const jumperValue = ref("");

const handleJumperBlur = () => {
  if (props.disabled) return;

  let val = jumperValue.value + "";
  val = val.replace(/\D/g, '');

  val < 1 && (jumperValue.value = 1);
  val > props.pages && (jumperValue.value = props.pages)
  emit("change", 'page', Number(jumperValue.value))
}

watchEffect(() => { jumperValue.value = props.currentPage });
</script>

<script>
export default { name: "bp-pagination-jumper" }
</script>