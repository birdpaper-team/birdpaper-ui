import type { App } from 'vue';
import _IconHandleSquare from './icon-handle-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleSquare.name = getComponentsPrefix() + _IconHandleSquare.name;

const IconHandleSquare = Object.assign(_IconHandleSquare, {
  install: (app: App) => {
    app.component(_IconHandleSquare.name, _IconHandleSquare);
  }
});

export default IconHandleSquare;