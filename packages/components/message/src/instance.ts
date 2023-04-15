import { AppContext, Ref, createVNode, reactive, ref, render } from "vue";
import Message from "./messageList.vue";
import { MessageConfig, MessageItem } from "./type";

class MessageManager {
  private container: HTMLElement | null;
  private readonly messageList: Ref<MessageItem[]>;

  constructor(config: string | MessageConfig, appContext?: AppContext) {
    this.messageList = ref([]);

    const mask = document.createElement("div");
    mask.setAttribute("class", `bp-mask-message`);
    this.container = mask;

    const vm = createVNode(Message, {
      list: this.messageList.value,
      onClose: this.remove,
    });

    if (appContext) {
      vm.appContext = appContext;
    }
    render(vm, this.container);
    document.body.appendChild(this.container);
  }

  add = (config: MessageConfig) => {
    const id = config.id ?? `_bp_message_${Math.random().toString()}`;

    const message: MessageItem = reactive({ id, ...config });
    this.messageList.value.push(message);

    return {
      close: () => this.remove(id),
    };
  };

  remove = (id: string | number) => {
    for (let i = 0; i < this.messageList.value.length; i++) {
      const { id: itemId } = this.messageList.value[i];
      if (id === itemId) {
        this.messageList.value.splice(i, 1);
        break;
      }
    }
  };
}

export default MessageManager;
