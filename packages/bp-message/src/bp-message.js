/*
 * @Author: Sam
 * @Date: 2020-01-21 21:17:22
 * @Last Modified by: Sam
 * @Last Modified time: 2020-06-02 14:32:32
 */
import Notification from './notification.js';


let instance;

function setMessageInstance() {
  instance = instance || Notification.newInstance();
  return instance;
}

function message({
  type = "text",
  icon = "",
  delayed = 3000,
  immersive = false,
  content = "",
  close = true
}) {
  let instance = setMessageInstance();

  instance.add({
    type: type, // 消息类型
    icon: icon, // 消息图标
    content: content, // 消息内容
    immersive: immersive, // 沉浸式显示
    delayed: delayed, // 自动关闭延迟时间
    close: close // 是否显示手动关闭按钮
  });
}

export default {
  // 纯文本消息
  text(config) {
    let cfg = typeof config == 'string' ? {
      content: config,
      type: "text",
      icon: ""
    } : Object.assign({
        type: "text",
        icon: ""
      },
      config
    );
    return message(cfg);
  },
  // 成功提示
  success(config) {
    let cfg = typeof config == 'string' ? {
      content: config,
      type: "success",
      icon: "ri-checkbox-circle-fill",
    } : Object.assign({
        type: "success",
        icon: "ri-checkbox-circle-fill",
      },
      config
    );
    return message(cfg);
  },
  // 警告提示
  warning(config) {
    let cfg = typeof config == 'string' ? {
      content: config,
      type: "warning",
      icon: "ri-error-warning-fill",
    } : Object.assign({
        type: "warning",
        icon: "ri-error-warning-fill",
      },
      config
    );
    return message(cfg);
  },
  // 错误提示
  error(config) {
    let cfg = typeof config == 'string' ? {
      content: config,
      type: "error",
      icon: "ri-close-circle-fill",
    } : Object.assign({
        type: "error",
        icon: "ri-close-circle-fill",
      },
      config
    );
    return message(cfg);
  },
  // 加载提示
  loading(config) {
    let cfg = typeof config == 'string' ? {
      content: config,
      type: "loading",
      icon: "ri-loader-5-fill",
    } : Object.assign({
        type: "loading",
        icon: "ri-loader-5-fill",
      },
      config
    );
    return message(cfg);
  },
}