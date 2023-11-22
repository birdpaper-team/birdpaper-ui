import { AppContext, Ref, createVNode, reactive, ref, render } from "vue";
import Message from "./messageList.vue";
import { MessageItem } from "./type";
import { arrayIndexOf, deepClone } from "../../../utils/util";

class MessageManager {
  private mask: HTMLElement = document.createElement("div");
  private messageList: Ref<MessageItem[]>;

  constructor(appContext?: AppContext) {
    this.messageList = ref<MessageItem[]>([]);
    this.mask.setAttribute("class", `bp-mask-message`);

    const vm = createVNode(Message, {
      list: this.messageList.value,
      onRemove: this.remove,
    });

    if (appContext) {
      vm.appContext = appContext;
    }
    render(vm, this.mask);
    document.body.appendChild(this.mask);
  }

  /**
   * 添加消息提示
   * @param {MessageItem} config
   * @returns
   */
  add = (config: MessageItem) => {
    const id = config.id ?? `_bp_message_${Math.random().toString(36).slice(-8)}`;
    this.mask.setAttribute("class", `bp-mask-message bp-message-${config.position || "top"}`);

    const message: MessageItem = reactive({ id, ...config });

    // Check whether the message instance already exists. If has, update the message config, or push new one.
    const updateIdx = arrayIndexOf(this.messageList.value, "id", id);
    updateIdx !== -1 ? (this.messageList.value[updateIdx] = config) : this.messageList.value.push(message);

    // Handle possible simultaneous removal cases, step up 200ms to make the removal visual experience better.
    const len = this.messageList.value.length;
    if (len > 1 && this.messageList.value[len - 1]?.duration === message.duration) {
      message.duration = message.duration ?? 3000 + 200 * len;
    }

    return {
      remove: () => this.remove(id),
    };
  };

  /**
   * 移除消息提示
   * @param {string} id 消息id
   */
  remove = (id: string) => {
    for (let i = 0; i < this.messageList.value.length; i++) {
      const { id: itemId } = this.messageList.value[i];

      if (id === itemId) {
        this.messageList.value.splice(i, 1);
        break;
      }
    }
  };

  /** 清除消息列表 */
  clear = () => {
    const arr = deepClone(this.messageList.value);
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      this.remove(element.id);
    }
  };
}

export default MessageManager;
