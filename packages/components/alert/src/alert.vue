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

    <div :class="`${name}-option`">
      <div v-if="closeable" :class="`${name}-close-inner`" @click="handleClose">
        <i class="ri-close-line" v-if="!slots.close"></i>
        <span v-else><slot name="close"></slot></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, computed, ref } from "vue";
import { AlertType } from "./types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Alert",
  props: {
    type: { type: String as PropType<AlertType>, default: "info" },
    title: { type: String, default: "" },
    closeable: { type: Boolean, default: false },
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const name = "bp-alert";

    const cls = computed(() => {
      return [name, `${name}-${props.type}`, props.title ? `${name}-with-title` : ""];
    });

    const isRender = ref<boolean>(true);

    const handleClose = () => {
      isRender.value = false;
      emit("close");
    };

    return {
      name,
      cls,
      isRender,
      handleClose,
      slots,
    };
  },
});
</script>
