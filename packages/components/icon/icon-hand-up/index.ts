import type { App } from 'vue';
import _IconHandUp from './icon-hand-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandUp.name = getComponentsPrefix() + _IconHandUp.name;

const IconHandUp = Object.assign(_IconHandUp, {
  install: (app: App) => {
    app.component(_IconHandUp.name, _IconHandUp);
  }
});

export default IconHandUp;