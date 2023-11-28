import type { App } from 'vue';
import _IconHandleUp from './icon-handle-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandleUp.name = getComponentsPrefix() + _IconHandleUp.name;

const IconHandleUp = Object.assign(_IconHandleUp, {
  install: (app: App) => {
    app.component(_IconHandleUp.name, _IconHandleUp);
  }
});

export default IconHandleUp;