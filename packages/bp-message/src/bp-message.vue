/*
 * @Author: Sam
 * @Date: 2020-01-21 16:12:26
 * @Last Modified by: Sam
 * @Last Modified time: 2020-01-22 19:37:00
 */
<template>
  <div class="bp-message">
    <!-- 消息列表 -->
    <transition-group name="message-list" tag="span">
      <div class="message-container" v-for="(item,index) in message_list" :key="index">
        <!-- 内容 -->
        <div class="message-content">
          <!-- 消息类型图标 -->
          <div class="message-icon">
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
      message_list: []
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
      let index = this.message_list.push(
        Object.assign(
          {
            name: name
          },
          config
        )
      );

      // 指定时间后移除消息
      if(config.delayed!=0){
        setTimeout(() => {
          this.remove(name);
        }, config.delayed * 1000);
      }
    },
    // 根据 name 移除消息
    remove(name) {
      for (let i = 0; i < this.message_list.length; i++) {
        if (this.message_list[i].name === name) {
          this.message_list.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "./bp-message";
</style>