import { AppContext, Ref, createVNode, reactive, ref, render } from "vue";
import Message from "./messageList.vue";
import { MessageItem } from "./type";
import { deepClone } from "../../../utils/util";

class MessageManager {
  private container: HTMLElement | null;
  private messageList: Ref<MessageItem[]>;

  constructor(appContext?: AppContext) {
    this.messageList = ref<MessageItem[]>([]);

    const mask = document.createElement("div");
    mask.setAttribute("class", `bp-mask-message`);
    this.container = mask;

    const vm = createVNode(Message, {
      list: this.messageList.value,
      onRemove: this.remove,
    });

    if (appContext) {
      vm.appContext = appContext;
    }
    render(vm, this.container);
    document.body.appendChild(this.container);
  }

  /**
   * 添加消息提示
   * @param {MessageItem} config
   * @returns
   */
  add = (config: MessageItem) => {
    const id = config.id ?? `_bp_message_${Math.random().toString(36).slice(-8)}`;

    const message: MessageItem = reactive({ id, ...config });
    this.messageList.value.push(message);

    // 处理可能存在的同时移除情况。
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
