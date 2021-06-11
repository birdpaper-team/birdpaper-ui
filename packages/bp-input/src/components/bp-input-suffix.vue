/*
 * @Author: Sam
 * @Date: 2021-05-27 10:15:43
 * @Last Modified by: Sam
 * @Last Modified time: 2021-05-27 15:12:47
 */
<template>
  <transition name="bp-fade-in">
    <div v-if="modelValue" class="bp-input-suffix" @click="onClick">
      <span class="bp-input-suffix-inner">
        <slot></slot>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "bp-input-suffix",
  props: {
    modelValue: {
      type: [Object, Array, String, Function, Boolean],
      default: () => false,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const onClick = (e) => {
      emit("click", e);
    };

    return {
      onClick,
    };
  },
};
</script>