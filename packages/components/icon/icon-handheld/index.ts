import type { App } from 'vue';
import _IconHandheld from './icon-handheld.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandheld.name = getComponentsPrefix() + _IconHandheld.name;

const IconHandheld = Object.assign(_IconHandheld, {
  install: (app: App) => {
    app.component(_IconHandheld.name, _IconHandheld);
  }
});

export default IconHandheld;