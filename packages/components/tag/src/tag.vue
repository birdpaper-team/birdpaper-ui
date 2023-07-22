<template>
  <div :class="cls" v-if="visible">
    <div v-if="dot" :class="[`${name}-dot`, `${name}-dot-${status}`]"></div>

    <span :class="`${name}-inner`">
      <slot></slot>
    </span>

    <i v-if="closeable" class="ri-close-line" @click="handleClose"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed, ref } from "vue";

export default defineComponent({
  name: "Tag",
  props: {
    status: { type: String, default: "normal" },
    dot: { type: Boolean, default: false },
    closeable: { type: Boolean, default: false },
  },
  setup(props) {
    const name = "bp-tag";

    const cls = computed(() => {
      return [name, props.dot ? `${name}-dot-box` : `${name}-${props.status}`];
    });

    const visible = ref(true);
    const handleClose = () => {
      if (!props.closeable) return;

      visible.value = false;
    };

    return {
      name,
      cls,
      visible,
      handleClose,
    };
  },
});
</script>
