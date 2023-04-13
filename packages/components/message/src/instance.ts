import { AppContext, createApp, createVNode, render } from "vue";
import Message from "./message.vue";
import { MessageConfig } from "./type";

class MessageManager {
  constructor(config: MessageConfig, appContext?: AppContext) {
    const box = document.createElement("div");
    const vm = createVNode(Message);

    render(vm, box);
    document.body.appendChild(box);
  }
  add() {}
}

export default MessageManager;
