import type { App } from 'vue';
import _IconHandbag from './icon-handbag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandbag.name = getComponentsPrefix() + _IconHandbag.name;

const IconHandbag = Object.assign(_IconHandbag, {
  install: (app: App) => {
    app.component(_IconHandbag.name, _IconHandbag);
  }
});

export default IconHandbag;