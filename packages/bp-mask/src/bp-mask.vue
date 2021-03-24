/*
 * @Author: Sam
 * @Date: 2020-04-02 14:27:59
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-03 10:49:05
 */
<template>
  <teleport to="body">
    <transition name="mask-fade">
      <div class="bp-mask" v-if="visible"></div>
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
  setup(props) {
    const visible = ref(false);

    watch(
      () => props.modelValue,
      (val) => {
        visible.value = val;
      }
    );

    return {
      visible,
    };
  },
};
</script>