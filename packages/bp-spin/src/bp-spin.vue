<template>
  <transition name="bp-fade-in">
    <div class="bp-spin" v-if="loading" :style="`border-radius:${radius}px`">
      <div class="bp-spin-main">
        <span class="bp-icon-spin">
          <i class="ri-loader-5-fill"></i>
        </span>
        <p class="bp-spon-text">
          <slot></slot>
        </p>
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
    radius: { type: [Number, String], default: 0 },
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
