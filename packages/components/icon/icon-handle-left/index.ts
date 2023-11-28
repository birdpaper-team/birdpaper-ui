import type { App } from 'vue';
import _IconHandleLeft from './icon-handle-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleLeft.name = getComponentsPrefix() + _IconHandleLeft.name;

const IconHandleLeft = Object.assign(_IconHandleLeft, {
  install: (app: App) => {
    app.component(_IconHandleLeft.name, _IconHandleLeft);
  }
});

export default IconHandleLeft;