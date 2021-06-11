/*
 * @Author: Sam
 * @Date: 2021-05-27 14:58:31
 * @Last Modified by: Sam
 * @Last Modified time: 2021-05-27 15:10:07
 */
<template>
  <div class="bp-input-append" v-if="modelValue">
    <span class="bp-input-append-inner">
      <slot> </slot>
    </span>
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