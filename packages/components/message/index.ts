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
    if (isString(config)) {
      config = { content: config as string };
    }

    const _config: MessageConfig = { type: value as MessageType, ...(config as MessageConfig) };
    if (!msg) {
      msg = new MessageManager(_config, appContext);
    }
    return msg!.add(config as MessageConfig);
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
