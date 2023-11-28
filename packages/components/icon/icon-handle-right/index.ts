import type { App } from 'vue';
import _IconHandleRight from './icon-handle-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleRight.name = getComponentsPrefix() + _IconHandleRight.name;

const IconHandleRight = Object.assign(_IconHandleRight, {
  install: (app: App) => {
    app.component(_IconHandleRight.name, _IconHandleRight);
  }
});

export default IconHandleRight;