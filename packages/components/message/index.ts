import { App } from "vue";
import _message from "./src/messageList.vue";
import { getComponentsPrefix } from "../../utils/config";
import MessageManager from "./src/instance";
import { MessageConfig } from "./src/type";

_message.name = getComponentsPrefix() + _message.name;

let msg: MessageManager = null;

const message = {
  /** 纯文本提示 */
  text: (config: MessageConfig) => {
    if (!msg) {
      msg = new MessageManager(config);
    }
    return msg!.add(config);
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
