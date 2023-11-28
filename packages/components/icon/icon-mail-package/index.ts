import type { App } from 'vue';
import _IconMailPackage from './icon-mail-package.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMailPackage.name = getComponentsPrefix() + _IconMailPackage.name;

const IconMailPackage = Object.assign(_IconMailPackage, {
  install: (app: App) => {
    app.component(_IconMailPackage.name, _IconMailPackage);
  }
});

export default IconMailPackage;