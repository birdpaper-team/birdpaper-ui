<template>
  <div class="bp-input-append" v-if="modelValue">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "bp-input-append",
  props: {
    modelValue: {
      type: [Object, Array, String, Function, Boolean],
      default: () => false,
    },
  },
};
</script>
