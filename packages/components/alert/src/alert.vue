<template>
  <div :class="cls" v-if="isRender">
    <div :class="`${name}-icon`">
      <component :is="iconType[type]" size="16px"></component>
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
        <IconCloseLine v-if="!slots.close" />
        <span v-else><slot name="close"></slot></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from "vue";
import { AlertType } from "./types";
import {
  IconCloseLine,
  IconCheckboxCircleFill,
  IconCloseCircleFill,
  IconErrorWarningFill,
  IconLoader5Line,
} from "birdpaper-icon";

export default defineComponent({
  name: "Alert",
  props: {
    type: { type: String as PropType<AlertType>, default: "info" },
    title: { type: String, default: "" },
    closeable: { type: Boolean, default: false },
  },
  emits: ["close"],
  components: { IconCloseLine },
  setup(props, { emit, slots }) {
    const name = "bp-alert";

    const iconType = {
      success: IconCheckboxCircleFill,
      error: IconCloseCircleFill,
      warning: IconErrorWarningFill,
      loading: IconLoader5Line,
    };

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
      iconType,
      isRender,
      handleClose,
      slots,
    };
  },
});
</script>
