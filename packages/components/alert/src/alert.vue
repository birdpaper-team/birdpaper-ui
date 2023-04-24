<template>
  <div :class="cls" v-if="isRender">
    <div :class="`${name}-icon`">
      <i v-if="type === 'info'" class="ri-information-fill"></i>
      <i v-if="type === 'success'" class="ri-checkbox-circle-fill"></i>
      <i v-if="type === 'warning'" class="ri-error-warning-fill"></i>
      <i v-if="type === 'error'" class="ri-close-circle-fill"></i>
    </div>

    <div :class="`${name}-body`">
      <div v-if="title" :class="`${name}-title`">
        <span v-text="title"></span>
      </div>
      <div :class="`${name}-content`">
        <span><slot></slot></span>
      </div>
    </div>

    <div :class="`${name}-option`" v-if="closeable" @click="handleClose">
      <i class="ri-close-line"></i>
    </div>
  </div>
</template>

<script setup lang="ts" name="Alert">
import { PropType, computed, ref } from "vue";
import { AlertType } from "./types";

const name = "bp-alert";
const props = defineProps({
  type: { type: String as PropType<AlertType>, default: "info" },
  title: { type: String, default: "" },
  showIcon: { type: Boolean, default: false },
  closeable: { type: Boolean, default: false },
});

const emits = defineEmits<{
  (e: "close"): void;
}>();

const cls = computed(() => {
  return [name, `${name}-${props.type}`,props.title?`${name}-with-title`:''];
});

const isRender = ref<boolean>(true);

const handleClose = () => {
  isRender.value = false;
};
</script>
