import { AppContext } from "vue";
import MessageManager from "./src/instance";
import { MessageInstance, MessageItem, MessageType } from "./src/type";
import { isString } from "radash";

let msg: MessageManager;
const types = ["text", "success", "warning", "error", "loading"] as const;

const message = types.reduce((pre, value) => {
  pre[value] = (config: MessageInstance, appContext?: AppContext) => {
    if (isString(config)) {
      config = { content: config as string } as MessageItem;
    }

    const _config: MessageItem = {
      type: value as MessageType,
      plain: false,
      position: "top",
      content: "",
      duration: 3000,
      closeable: false,
      ...(config as MessageItem),
      id: (config as MessageItem).id,
    };

    if (!msg) {
      msg = new MessageManager(appContext);
    }
    return msg!.add(_config);
  };
  return pre;
}, {} as any);

export const Message = Object.assign({
  ...message,
  removeAll: () => {
    msg && msg.clear();
  },
  destroy: () => {
    if (msg) {
      msg.destroy();
      msg = undefined as any;
    }
  },
  install: () => {
    return {};
  },
});

export { default as MessageComponent } from "./src/message.vue";
export { default as MessageManager } from "./src/instance";
