import type { App } from 'vue';
import _IconFileProtection from './icon-file-protection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileProtection.name = getComponentsPrefix() + _IconFileProtection.name;

const IconFileProtection = Object.assign(_IconFileProtection, {
  install: (app: App) => {
    app.component(_IconFileProtection.name, _IconFileProtection);
  }
});

export default IconFileProtection;