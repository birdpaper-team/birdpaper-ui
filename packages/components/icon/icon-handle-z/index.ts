import type { App } from 'vue';
import _IconHandleZ from './icon-handle-z.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleZ.name = getComponentsPrefix() + _IconHandleZ.name;

const IconHandleZ = Object.assign(_IconHandleZ, {
  install: (app: App) => {
    app.component(_IconHandleZ.name, _IconHandleZ);
  }
});

export default IconHandleZ;