<template>
  <div :class="name">
    <Teleport to="body">
      <Transition name="fade-select" appear>
        <div ref="innerRef" :class="`${name}-inner`" v-show="show" v-clickOutside="handleCancle">
          <div :class="`${name}-inner-content`">
            <span :class="`${name}-icon`">
              <i v-if="type === 'success'" class="ri-checkbox-circle-fill"></i>
              <i v-if="type === 'danger'" class="ri-close-circle-fill"></i>
              <i v-if="type === 'warning'" class="ri-error-warning-fill"></i>
              <i v-if="type === 'info'" class="ri-information-fill"></i>
            </span>
            <span :class="`${name}-text`">
              {{ content }}
            </span>
          </div>

          <div :class="`${name}-inner-footer`">
            <bp-space size="mini" justify="flex-end">
              <bp-button @click="handleCancle" size="mini">{{ cancleText }}</bp-button>
              <bp-button @click="handleOk" :loading="okLoading" size="mini" type="primary" status="primary">{{
                okText
              }}</bp-button>
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
import { PropType, defineComponent, nextTick, onBeforeUnmount, ref, onMounted } from "vue";
import { PopconfirmPosition, PopconfirmType } from "./type";
import { vClickOutside } from "../../../directives/clickOutside";
import { off, on, throttle } from "../../../utils/util";

export default defineComponent({
  name: "Popconfirm",
  props: {
    content: { type: String, default: "" },
    type: { type: String as PropType<PopconfirmType>, default: PopconfirmType.Info },
    position: { type: String as PropType<PopconfirmPosition>, default: PopconfirmPosition.Top },
    okText: { type: String, default: "确认" },
    cancleText: { type: String, default: "取消" },
    onBeforeOk: { type: Function, default: () => true },
  },
  directives: { clickOutside: vClickOutside },
  emits: ["ok", "cancle"],
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

      const position = {
        top: `top:${slotRect.top - 10}px;left:${
          slotRect.left + slotRect.width / 2
        }px;transform: translateX(-50%) translateY(-100%);`,

        bottom: `top:${slotRect.top + slotRect.height + 10}px;left:${
          slotRect.left + slotRect.width / 2
        }px;transform: translateX(-50%);`,

        left: `top:${slotRect.top + slotRect.height / 2}px;left:${
          slotRect.left - 10
        }px;transform: translateX(-100%) translateY(-50%);`,

        right: `top:${slotRect.top + slotRect.height / 2}px;right:${
          slotRect.right
        }px;transform: translateX(-100%) translateY(-50%);`,
      };

      innerRef.value.setAttribute("style", `${position[props.position]};display:${show.value ? "block" : "none"}`);
    };

    const handleCancle = () => {
      show.value = false;
      emit("cancle");
    };

    const okLoading = ref<boolean>(false);
    const handleOk = async () => {
      try {
        okLoading.value = true;
        const res = await props.onBeforeOk();
        if (!res) return;

        show.value = false;
        emit("ok");
      } catch (error) {
        console.log("[ Popconfirm -onBeforeOk error]", error);
      } finally {
        okLoading.value = false;
      }
    };

    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleResize, 100));
      });
    });

    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
    });

    return {
      name,
      show,
      slotRef,
      innerRef,
      okLoading,
      handleClick,
      handleCancle,
      handleOk,
    };
  },
});
</script>
