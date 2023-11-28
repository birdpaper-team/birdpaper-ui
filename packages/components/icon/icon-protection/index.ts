import type { App } from 'vue';
import _IconProtection from './icon-protection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconProtection.name = getComponentsPrefix() + _IconProtection.name;

const IconProtection = Object.assign(_IconProtection, {
  install: (app: App) => {
    app.component(_IconProtection.name, _IconProtection);
  }
});

export default IconProtection;