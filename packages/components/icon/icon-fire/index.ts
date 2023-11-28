import type { App } from 'vue';
import _IconFire from './icon-fire.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFire.name = getComponentsPrefix() + _IconFire.name;

const IconFire = Object.assign(_IconFire, {
  install: (app: App) => {
    app.component(_IconFire.name, _IconFire);
  }
});

export default IconFire;