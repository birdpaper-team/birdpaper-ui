import type { App } from 'vue';
import _IconHandleTriangle from './icon-handle-triangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleTriangle.name = getComponentsPrefix() + _IconHandleTriangle.name;

const IconHandleTriangle = Object.assign(_IconHandleTriangle, {
  install: (app: App) => {
    app.component(_IconHandleTriangle.name, _IconHandleTriangle);
  }
});

export default IconHandleTriangle;