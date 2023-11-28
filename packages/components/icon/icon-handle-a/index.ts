import type { App } from 'vue';
import _IconHandleA from './icon-handle-a.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleA.name = getComponentsPrefix() + _IconHandleA.name;

const IconHandleA = Object.assign(_IconHandleA, {
  install: (app: App) => {
    app.component(_IconHandleA.name, _IconHandleA);
  }
});

export default IconHandleA;