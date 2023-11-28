import type { App } from 'vue';
import _IconInstall from './icon-install.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInstall.name = getComponentsPrefix() + _IconInstall.name;

const IconInstall = Object.assign(_IconInstall, {
  install: (app: App) => {
    app.component(_IconInstall.name, _IconInstall);
  }
});

export default IconInstall;