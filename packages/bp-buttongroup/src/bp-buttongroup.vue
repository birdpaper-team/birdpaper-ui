<template>
  <div :class="[round ? 'bp-buttongroup-round' : 'bp-buttongroup']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bp-buttongroup",
  props: {
    round: { type: Boolean, default: false }, // 是否圆角
  },
};
</script>
