<template>
  <div class="bp-pagination-jumper">
    <span v-if="jumperText.prefix">{{ jumperText.prefix }}</span>
    <bp-input v-model.number="jumperValue" :size="size" :disabled="disabled" @blur="handleJumperBlur"></bp-input>
    <span v-if="jumperText.suffix">{{ jumperText.suffix }}</span>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, reactive, ref, watchEffect } from "vue";

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 }, // 当前激活页
  pages: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false }, // 是否禁用
  tmpString: { type: String, default: "跳至{jumper}页" },
  size: { type: String, default: "small" },
});

const emit = defineEmits(["change"]);

const paramsStr = "{jumper}";
const jumperValue = ref("");
const jumperText = reactive({ prefix: "", suffix: "" });

const handleJumperBlur = () => {
  if (props.disabled) return;

  let val = jumperValue.value + "";
  val = val.replace(/\D/g, "");

  val < 1 && (jumperValue.value = 1);
  val > props.pages && (jumperValue.value = props.pages);
  emit("change", "page", Number(jumperValue.value));
};

watchEffect(() => {
  const str = props.tmpString.split(paramsStr);
  if (str.length > 1) {
    jumperText.prefix = str[0];
    jumperText.suffix = str[1];
  }
});

watchEffect(() => {
  jumperValue.value = props.currentPage;
});
</script>

<script>
export default { name: "bp-pagination-jumper" };
</script>
