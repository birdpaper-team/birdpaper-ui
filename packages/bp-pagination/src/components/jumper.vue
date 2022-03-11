<template>
  <div class="bp-page-jumper">
    <span v-if="jumperText.prefix" class="page-text">{{ jumperText.prefix }}</span>
    <bp-input v-model.number="jumperValue" size="small" :disabled="disabled" @blur="handleJumperBlur"></bp-input>
    <span v-if="jumperText.suffix" class="page-text">{{ jumperText.suffix }}</span>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, reactive, ref, watchEffect } from "vue";
import { beInteger } from "../../../utils/util";

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 },
  pages: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false },
  tmpString: { type: String, default: "跳至{jumper}页" },
});

const emit = defineEmits(["change"]);

const paramsStr = "{jumper}";
const jumperValue = ref("");
const jumperText = reactive({ prefix: "", suffix: "" });

const handleJumperBlur = () => {
  if (props.disabled) return;

  let val = beInteger(jumperValue.value);
  val < 1 && (jumperValue.value = 1);
  val > props.pages && (jumperValue.value = props.pages);

  emit("change", "page", jumperValue.value);
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
