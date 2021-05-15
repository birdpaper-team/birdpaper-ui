/*
 * @Author: Sam
 * @Date: 2021-05-14 16:41:44
 * @Last Modified by: Sam
 * @Last Modified time: 2021-05-15 08:24:32
 */
<template>
  <transition name="bp-fade-in">
    <span
      v-show="modelValue"
      @click="onClick"
      :class="{ 'bp-textarea-num-limit': isTextarea }"
    >
      <i v-if="icon !== ''" :class="icon"></i>
      <template v-if="text !== ''">{{ text }}</template>
    </span>
  </transition>
</template>

<script>
export default {
  name: "the-input-option",
  props: {
    isTextarea: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false },
    icon: { type: String, default: "" },
    text: { type: String, default: "" },
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