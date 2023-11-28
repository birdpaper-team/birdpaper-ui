import type { App } from 'vue';
import _IconGiftBox from './icon-gift-box.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGiftBox.name = getComponentsPrefix() + _IconGiftBox.name;

const IconGiftBox = Object.assign(_IconGiftBox, {
  install: (app: App) => {
    app.component(_IconGiftBox.name, _IconGiftBox);
  }
});

export default IconGiftBox;