import type { App } from 'vue';
import _IconInjection from './icon-injection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInjection.name = getComponentsPrefix() + _IconInjection.name;

const IconInjection = Object.assign(_IconInjection, {
  install: (app: App) => {
    app.component(_IconInjection.name, _IconInjection);
  }
});

export default IconInjection;