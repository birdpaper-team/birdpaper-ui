import { App } from "vue";
import _message from "./src/message.vue";
import { getComponentsPrefix } from "../../utils/config";
import MessageManager from "./src/instance";
import { MessageConfig } from "./src/type";

_message.name = getComponentsPrefix() + _message.name;

const message = {
  /** 纯文本提示 */
  text: (config: MessageConfig) => {
    new MessageManager(config);
  },
  // TODO
};

const Message = Object.assign({
  ...message,
  install: (app: App) => {
    app.component(_message.name, _message);
  },
});

export default Message;
