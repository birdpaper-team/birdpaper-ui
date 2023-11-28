import type { App } from 'vue';
import _IconHandleC from './icon-handle-c.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleC.name = getComponentsPrefix() + _IconHandleC.name;

const IconHandleC = Object.assign(_IconHandleC, {
  install: (app: App) => {
    app.component(_IconHandleC.name, _IconHandleC);
  }
});

export default IconHandleC;