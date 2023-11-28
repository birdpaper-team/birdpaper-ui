import type { App } from 'vue';
import _IconViewfinder from './icon-viewfinder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViewfinder.name = getComponentsPrefix() + _IconViewfinder.name;

const IconViewfinder = Object.assign(_IconViewfinder, {
  install: (app: App) => {
    app.component(_IconViewfinder.name, _IconViewfinder);
  }
});

export default IconViewfinder;