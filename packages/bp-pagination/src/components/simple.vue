<template>
  <div class="bp-page-simple">
    <jumper size="mini" :pages="pages" :currentPage="currentPage" :disabled="disabled" tmpString="{jumper}" @change="change"></jumper>
    <li class="bp-page-item simple-separator">/</li>
    <li class="bp-page-item">
      {{ pages }}
    </li>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import jumper from "./jumper.vue";

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 }, // 当前激活页
  pages: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false }, // 是否禁用
});

const emit = defineEmits(["change"]);

const change = (type, val) => {
  emit("change", type, Number(val));
};
</script>

<script>
export default { name: "bp-paginoation-simple" };
</script>
