<template>
  <teleport to="body">
    <transition name="mask-fade">
      <div class="bp-mask" v-if="visible" @click="onClick"></div>
    </transition>
  </teleport>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "bp-mask",
  props: {
    // 遮罩显示/隐藏
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const visible = ref(false);
    const onClick = () => {
      emit("click")
    }

    watch(
      () => props.modelValue,
      (val) => {
        visible.value = val;
      }
    );

    return {
      visible,
      onClick
    };
  },
};
</script>