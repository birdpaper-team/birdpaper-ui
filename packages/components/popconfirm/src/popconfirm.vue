<template>
  <bp-trigger v-model:popup-visible="show" :class="name" :popup-offset="10" :position="position" update-at-scroll>
    <div :class="`${name}-slot`">
      <slot></slot>
    </div>

    <template #content>
      <div :class="`${name}-inner`">
        <div :class="`${name}-inner-content`">
          <span :class="`${name}-icon`">
            <component :is="iconType[type]" size="16px"></component>
          </span>
          <span :class="`${name}-text`">
            {{ content }}
          </span>
        </div>

        <div :class="`${name}-inner-footer`">
          <bp-space size="mini" justify="flex-end">
            <bp-button @click="handleCancle" size="mini">{{ cancleText }}</bp-button>
            <bp-button @click="handleOk" :loading="okLoading" size="mini" type="primary" status="primary">
              {{ okText }}
            </bp-button>
          </bp-space>
        </div>
      </div>
    </template>
  </bp-trigger>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from "vue";
import { PopconfirmPosition, PopconfirmType } from "./types";
import { vClickOutside } from "../../../directives/clickOutside";
import BpTrigger from "../../trigger/src/trigger";
import { IconCheckboxCircleFill, IconCloseCircleFill, IconErrorWarningFill, IconInformationFill } from "birdpaper-icon";

export default defineComponent({
  name: "Popconfirm",
  props: {
    /**确认框文本内容 */
    content: { type: String, default: "" },
    /** 类型 */
    type: { type: String as PropType<PopconfirmType>, default: "info" },
    /** 弹出位置 */
    position: { type: String as PropType<PopconfirmPosition>, default: "top" },
    /** 确认按钮文本 */
    okText: { type: String, default: "确认" },
    /** 取消按钮文本 */
    cancleText: { type: String, default: "取消" },
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true },
  },
  directives: { clickOutside: vClickOutside },
  emits: ["ok", "cancle"],
  setup(props, { emit }) {
    const name = "bp-popconfirm";
    const show = ref<boolean>(false);
    const iconType = {
      info: IconInformationFill,
      success: IconCheckboxCircleFill,
      error: IconCloseCircleFill,
      warning: IconErrorWarningFill,
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

    return {
      name,
      show,
      okLoading,
      iconType,
      handleCancle,
      handleOk,
    };
  },
});
</script>
