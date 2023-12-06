<template>
  <div :class="cls">
    <div v-if="dot" :class="[`${name}-dot`, `${name}-dot-${status}`]"></div>

    <div :class="`${name}-icon`">
      <slot name="icon" v-if="slots.icon"></slot>
      <component v-else :is="icon"></component>
    </div>

    <span :class="`${name}-inner`">
      <slot></slot>
    </span>

    <IconCloseLine v-if="closeable" @click="handleClose" size="14px" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from "vue";
import { IconCloseLine } from "birdpaper-icon";
import { TagStatus } from "./types";

export default defineComponent({
  name: "Tag",
  props: {
    /** 标签图标 */
    icon: { type: Object },
    status: { type: String as PropType<TagStatus>, default: "normal" },
    dot: { type: Boolean, default: false },
    closeable: { type: Boolean, default: false },
  },
  components: { IconCloseLine },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const name = "bp-tag";

    const cls = computed(() => {
      return [name, props.dot ? `${name}-dot-box` : `${name}-${props.status}`];
    });

    const handleClose = () => {
      if (!props.closeable) return;
      emit("close");
    };

    return {
      name,
      cls,
      slots,
      handleClose,
    };
  },
});
</script>
