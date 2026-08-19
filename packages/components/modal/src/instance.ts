import { AppContext, Ref, createVNode, nextTick, ref, render } from "vue";
import { ModalItem } from "./types";
import modal from "./modal.vue";

class ModalManager {
  private mask: HTMLElement;
  private vm: Ref<any>;

  constructor(config: ModalItem, appContext?: AppContext) {
    this.mask = document.createElement("div");
    this.vm = ref(
      createVNode(modal, {
        ...config,
        onCancel: this.handleClose.bind(this),
        onConfirm: this.handleClose.bind(this),
      })
    );

    if (appContext) {
      this.vm.value.appContext = appContext;
    }
  }

  private handleClose() {
    nextTick(() => {
      setTimeout(() => {
        this.close();
      }, 200);
    });
  }

  open() {
    render(this.vm.value, this.mask);
    return { close: () => this.close() };
  }

  close() {
    render(null, this.mask);
    // 移除 mask DOM 元素，防止内存泄漏
    if (this.mask.parentNode) {
      this.mask.parentNode.removeChild(this.mask);
    }
  }
}

export default ModalManager;
