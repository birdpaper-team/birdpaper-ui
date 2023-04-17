import { App, AppContext } from "vue";
import _message from "./src/messageList.vue";
import { getComponentsPrefix } from "../../utils/config";
import MessageManager from "./src/instance";
import { MessageConfig, MessageType } from "./src/type";
import { isString } from "../../utils/util";

_message.name = getComponentsPrefix() + _message.name;

let msg: MessageManager = null;
const types = ["text", "success", "warning", "error", "loading"] as const;

const message = types.reduce((pre, value) => {
  pre[value] = (config: string | MessageConfig, appContext?: AppContext) => {
    // 直接传入消息提示内容的情况
    if (isString(config)) {
      config = { content: config as string };
    }

    const _config: MessageConfig = { type: value as MessageType, ...(config as MessageConfig) };
    if (!msg) {
      msg = new MessageManager(appContext);
    }
    return msg!.add(_config as MessageConfig);
  };
  return pre;
}, {} as any);

const Message = Object.assign({
  ...message,
  install: (app: App) => {
    app.component(_message.name, _message);
  },
});

export default Message;
