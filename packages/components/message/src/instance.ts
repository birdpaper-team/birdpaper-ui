import { AppContext, Ref, createVNode, reactive, ref, render } from "vue";
import MessageList from "./messageList.vue";
import { MessageItem } from "./type";
import { uid } from "radash";

class MessageManager {
  private clsName: string = "--bp-message";
  private list: Ref<MessageItem[]>;
  private mask: HTMLElement = document.createElement("div");

  constructor(appContext?: AppContext) {
    this.list = ref<MessageItem[]>([]);

    const vm = createVNode(MessageList, {
      list: this.list.value,
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
    const id = config.id ?? `_bp_message_${uid(10)}`;
    this.mask.setAttribute("class", `${this.clsName}-mask ${this.clsName}-${config.position || "top"}`);

    const message: MessageItem = reactive({ ...config, id });

    // Check whether the message instance already exists. If has, update the message config, or push new one.
    const isExist = this.list.value.find((item, index) => {
      if (item.id === id) {
        this.list.value[index] = config;
        return true;
      }
    });

    if (!isExist) {
      this.list.value.push(message);
    }

    // Handle possible simultaneous removal cases, step up 200ms to make the removal visual experience better.
    const len = this.list.value.length;
    if (len > 1 && this.list.value[len - 1]?.duration === message.duration) {
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
    this.list.value.find((item, index) => {
      if (item.id === id) {
        this.list.value.splice(index, 1);
        return true;
      }
    });
  };

  /** 清除消息列表 */
  clear = () => {
    this.list.value.map((item) => {
      this.remove(item.id);
    });
  };
}

export default MessageManager;
