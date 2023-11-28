import type { App } from 'vue';
import _IconToBottom from './icon-to-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToBottom.name = getComponentsPrefix() + _IconToBottom.name;

const IconToBottom = Object.assign(_IconToBottom, {
  install: (app: App) => {
    app.component(_IconToBottom.name, _IconToBottom);
  }
});

export default IconToBottom;