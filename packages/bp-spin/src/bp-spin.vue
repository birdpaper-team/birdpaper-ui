/*
 * @Author: Sam
 * @Date: 2021-03-05 09:37:44
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-16 14:43:57
 */
<template>
  <transition name="bp-fade-in">
    <div class="bp-spin" v-if="loading">
      <div class="bp-spin-main">
        <span class="bp-icon-loading">
          <i class="ri-loader-fill"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "bp-spin",
  props: {
    spinning: { type: Boolean, default: false },
    delay: { type: Number, default: 0 },
  },
  setup(props) {
    const loading = ref(false);

    watch(
      () => props.spinning,
      (val) => {
        if (val) {
          loading.value = val;
          return;
        }
        if (props.delay !== 0) {
          setTimeout(() => {
            loading.value = false;
          }, props.delay);

          return;
        }
        loading.value = false;
      },
      {
        immediate: true,
      }
    );

    return {
      loading,
    };
  },
};
</script>