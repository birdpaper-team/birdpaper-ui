import type { App } from 'vue';
import _IconReload from './icon-reload.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReload.name = getComponentsPrefix() + _IconReload.name;

const IconReload = Object.assign(_IconReload, {
  install: (app: App) => {
    app.component(_IconReload.name, _IconReload);
  }
});

export default IconReload;