<template>
  <transition name="bp-fade-in">
    <div v-if="modelValue" class="bp-input-suffix" @click="onClick">
      <slot></slot>
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
