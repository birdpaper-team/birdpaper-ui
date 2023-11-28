import type { App } from 'vue';
import _IconHandleX from './icon-handle-x.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleX.name = getComponentsPrefix() + _IconHandleX.name;

const IconHandleX = Object.assign(_IconHandleX, {
  install: (app: App) => {
    app.component(_IconHandleX.name, _IconHandleX);
  }
});

export default IconHandleX;