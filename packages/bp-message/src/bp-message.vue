/*
 * @Author: Sam
 * @Date: 2020-01-21 16:12:26
 * @Last Modified by: Sam
 * @Last Modified time: 2020-05-12 16:24:32
 */
<template>
  <div class="bp-message">
    <!-- 消息列表 -->
    <transition-group name="message-list" tag="div">
      <div class="message-container" v-for="(item,index) in messageList" :key="`msg-${index}`">
        <!-- 内容 -->
        <div
          :class="['message-content',messageList[index].immersive ? `message-${messageList[index].type}-immersive` : '']"
        >
          <!-- 消息类型图标 -->
          <div class="message-icon" v-show="item.icon">
            <i :class="item.icon"></i>
          </div>
          <span>{{ item.content }}</span>
          <div class="option" v-if="item.close">
            <!-- 手动关闭消息 -->
            <i class="ri-close-fill" @click="remove(item.name)"></i>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messageList: []
    };
  },
  methods: {
    // 生成 message name
    setMessageName() {
      let timestamp = new Date().getTime();
      return "msg-" + timestamp;
    },
    // 添加消息通知
    add(config) {
      const name = this.setMessageName();

      // 追加数组
      let index = this.messageList.push(
        Object.assign(
          {
            name: name
          },
          config
        )
      );

      // 指定时间后移除消息
      if (config.delayed != 0) {
        setTimeout(() => {
          this.remove(name);
        }, config.delayed);
      }
    },
    // 根据 name 移除消息
    remove(name) {
      for (let i = 0; i < this.messageList.length; i++) {
        if (this.messageList[i].name === name) {
          this.messageList.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="less">
@import "./bp-message";
</style>