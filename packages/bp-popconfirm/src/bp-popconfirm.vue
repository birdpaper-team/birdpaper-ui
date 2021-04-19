/*
 * @Author: Sam
 * @Date: 2021-03-25 11:08:48
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-25 16:50:56
 */
<template>
  <div class="bp-popconfirm" @click="onClick">
    <!-- v-click-outside="onClickOutside" -->
    <template v-if="popShow">
      <div
        class="bp-popconfirm-content"
        :style="`bottom:${position.bottom};left:${position.left}`"
      >
        少时诵诗书
      </div>
      <div class="popconfirm-arrow" :style="`bottom:${position.bottom};`"></div>
    </template>
    <!-- 展示内容 -->
    <div class="bp-popconfirm-container" ref="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { clickOutside } from "../../utils/util.js";
export default {
  name: "bp-popconfirm",
  directives: { clickOutside },
  setup() {
    const popShow = ref(false);
    const container = ref(null);
    const state = reactive({
      position: {
        bottom: "",
        left: "",
      },
    });

    const onClick = () => {
      const elWidth = container.value.offsetWidth;
      const elHeight = container.value.offsetHeight;

      state.position.bottom = `${elHeight+10}px`;
      // state.position.left = `${elWidth / 2}px`;
      popShow.value = !popShow.value;
    };

    const onClickOutside = () => {
      console.log("[ popShow.value ]", popShow.value);
      if (!popShow.value) return;
      console.log("[ sss ]");
      popShow.value = false;
    };

    return {
      onClick,
      popShow,
      container,
      onClickOutside,
      ...toRefs(state),
    };
  },
};
</script>