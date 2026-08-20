import { AppContext, Ref, createVNode, reactive, ref, render } from "vue";
import MessageList from "./messageList.vue";
import { MessageItem } from "./type";
import { uid } from "radash";

class MessageManager {
  private clsName: string = "--bp-message";
  private list: Ref<MessageItem[]>;
  private masks: Map<string, HTMLElement> = new Map();
  private appContext?: AppContext;

  constructor(appContext?: AppContext) {
    this.appContext = appContext;
    this.list = ref<MessageItem[]>([]);

    // 为 top / bottom 各创建一个 mask 容器
    const topMask = document.createElement("div");
    const bottomMask = document.createElement("div");
    topMask.setAttribute("class", `${this.clsName}-mask ${this.clsName}-top`);
    bottomMask.setAttribute("class", `${this.clsName}-mask ${this.clsName}-bottom`);

    // 各自维护独立的 list 视图
    const topVm = createVNode(MessageList, {
      list: this.list.value,
      position: "top",
      onRemove: this.remove,
    });
    const bottomVm = createVNode(MessageList, {
      list: this.list.value,
      position: "bottom",
      onRemove: this.remove,
    });

    if (appContext) {
      topVm.appContext = appContext;
      bottomVm.appContext = appContext;
    }

    render(topVm, topMask);
    render(bottomVm, bottomMask);
    document.body.appendChild(topMask);
    document.body.appendChild(bottomMask);

    this.masks.set("top", topMask);
    this.masks.set("bottom", bottomMask);
  }

  /**
   * 添加消息提示
   * @param {MessageItem} config
   * @returns
   */
  add = (config: MessageItem): { remove: () => void } => {
    const id = config.id ?? `_bp_message_${uid(10)}`;
    const position = config.position || "top";

    const defaults: Partial<MessageItem> = {
      type: "text",
      content: "",
      duration: 3000,
      closeable: false,
      plain: false,
      position: "top",
    };

    const message: MessageItem = reactive({ ...defaults, ...config, id });

    // Check whether the message instance already exists. If has, merge the config.
    const isExist = this.list.value.some((item, index) => {
      if (item.id === id) {
        Object.assign(this.list.value[index], config, { id });
        return true;
      }
      return false;
    });

    if (!isExist) {
      this.list.value.push(message);
    }

    // Handle possible simultaneous removal cases, step up 200ms to make the removal visual experience better.
    const samePositionItems = this.list.value.filter((item) => item.position === position);
    const len = samePositionItems.length;
    if (len > 1) {
      const lastItem = samePositionItems[len - 2];
      const duration = message.duration ?? 0;
      if (lastItem && lastItem.duration === duration && duration > 0) {
        message.duration = duration + 200 * len;
      }
    }

    return {
      remove: () => this.remove(id),
    };
  };

  /**
   * 移除消息提示
   * @param {string} id 消息id
   */
  remove = (id: string): void => {
    const index = this.list.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.list.value.splice(index, 1);
    }
  };

  /** 清除消息列表 */
  clear = (): void => {
    this.list.value.splice(0, this.list.value.length);
  };

  /** 销毁容器 DOM，防止内存泄漏 */
  destroy = (): void => {
    this.masks.forEach((mask) => {
      render(null, mask);
      mask.remove();
    });
    this.masks.clear();
    this.list.value.splice(0, this.list.value.length);
  };
}

export default MessageManager;
