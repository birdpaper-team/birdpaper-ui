/*
 * @Author: Sam
 * @Date: 2020-01-21 21:19:51
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-01 15:20:29
 */
import Vue from 'vue';
import bpMessage from './bp-message.vue';

// 消息通知
bpMessage.newInstance = cfg => {
  const config = cfg || {};

  const Instance = new Vue({
    data: config,
    render(html) {
      return html(bpMessage, {
        config: config
      });
    }
  });

  // 在 BODY 上挂载
  document.body.appendChild(Instance.$mount().$el);

  const message = Instance.$children[0];

  return {
    add(messageConfig) {
      message.add(messageConfig);
    },
    remove(messageName) {
      message.remove(messageName);
    }
  }
};

export default bpMessage;