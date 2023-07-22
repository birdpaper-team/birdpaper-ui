<template>
  <div :class="name">
    <Teleport to="body">
      <Transition name="fade-select" appear>
        <div ref="innerRef" :class="`${name}-inner`" v-show="show">
          <div :class="`${name}-inner-content`">
            <span :class="`${name}-icon`">
              <i v-if="type === 'success'" class="ri-checkbox-circle-fill"></i>
              <i v-if="type === 'error'" class="ri-close-circle-fill"></i>
              <i v-if="type === 'warning'" class="ri-error-warning-fill"></i>
              <i v-if="type === 'info'" class="ri-information-fill"></i>
            </span>
            <span :class="`${name}-text`">
              {{ content }}
            </span>
          </div>

          <div :class="`${name}-inner-footer`">
            <bp-space size="mini" justify="flex-end">
              <bp-button @click="handleCancle" size="mini">取消</bp-button>
              <bp-button size="mini" type="primary" status="primary">确认</bp-button>
            </bp-space>
          </div>
        </div>
      </Transition>
    </Teleport>

    <div ref="slotRef" :class="`${name}-slot`" @click.stop="handleClick">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Popconfirm",
  props: {
    content: { type: String, default: "请确认" },
    type: { type: String, default: "info" },
  },
  setup(props, { emit }) {
    const name = "bp-popconfirm";
    const show = ref<boolean>(false);
    const slotRef = ref();
    const innerRef = ref();

    const handleClick = () => {
      handleResize();
      show.value = true;
    };

    const handleResize = () => {
      const slotRect = slotRef.value.getBoundingClientRect();

      innerRef.value.setAttribute(
        "style",
        `top:${slotRect.top - 10}px;
        transform: translateX(-50%)  translateY(-100%);
        left:${slotRect.left + slotRect.width / 2}px`
      );
    };

    const handleCancle = () => {
      show.value = false;
    };

    return {
      name,
      show,
      slotRef,
      innerRef,
      handleClick,
      handleCancle
    };
  },
});
</script>
