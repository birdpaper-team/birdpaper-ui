<template>
  <!-- 消息列表 -->
  <transition name="slide-fade">
    <div class="message-container" v-show="visibled">
      <!-- 内容 -->
      <div class="message-content">
        <!-- 消息类型图标 -->
        <div class="message-icon" v-if="config.icon">
          <i :class="config.icon"></i>
        </div>
        <span v-text="config.content"></span>
        <div class="option" v-if="!config.close">
          <!-- 手动关闭消息 -->
          <i class="ri-close-fill" @click="onClose"></i>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  props: {
    config: { type: Object, default: () => {} }, // 消息配置项
    remove: { type: Function, default: () => {} }, // 取消挂载回调
  },
  setup(props) {
    const state = reactive({
      visibled: false,
    });

    // 打开消息
    const onOpen = (config) => {
      setTimeout(() => {
        state.visibled = true;
      }, 10);

      // 指定时间后移除消息
      if (config.duration !== 0) {
        setTimeout(() => {
          onClose();
        }, config.duration);
      }
    };

    onOpen(props.config);

    // 消息关闭
    const onClose = () => {
      state.visibled = false;
      setTimeout(() => {
        props.remove();
      }, 200);
    };

    return {
      ...toRefs(state),
      onOpen,
      onClose,
    };
  },
};
</script>