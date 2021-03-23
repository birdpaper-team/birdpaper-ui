/*
 * @Author: Sam
 * @Date: 2020-01-21 21:19:51
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-10 18:01:49
 */
import {
  createApp,
} from 'vue';
import bpMessage from './bp-message.vue';

/**
 * Message 实例操作
 * @param {*} cfg 实例配置
 */
const createInstance = cfg => {
  const config = cfg || {};

  // 创建包裹容器，并设置外层的 Class 属性
  let messageNode = document.createElement('div');
  let attr = document.createAttribute("class");
  attr.value = "bp-message";
  messageNode.setAttributeNode(attr);

  // 消息计数：用于多个消息打开的时候，通过设置 Top 使各组件错开
  const height = 54; // 高度值
  const messageList = document.getElementsByClassName('bp-message');
  messageNode.style.top = `${messageList.length * height}px`;

  /**
   * 重新设置各个 Msg 距离顶部的 Top 值
   */
  const resetMsgTop = () => {
    for (let i = 0; i < messageList.length; i++) {
      messageList[i].style.top = `${i * height}px`
    }
  }

  const handleRemove = ()=>{
    app.unmount(messageNode);
    document.body.removeChild(messageNode);
    resetMsgTop();
  }

  // 创建 Vue 实例并挂载到 Body
  const app = createApp(bpMessage, {
    config,
    // 移除元素，消息关闭后从 Dom 上取消挂载并移除
    remove() {
      handleRemove()
    }
  })

  // 挂载实例并追加到 Body 结尾
  app.vm = app.mount(messageNode);
  document.body.appendChild(messageNode);

  app.close = () => {
    handleRemove()
  }
  return app;
};

export default createInstance;