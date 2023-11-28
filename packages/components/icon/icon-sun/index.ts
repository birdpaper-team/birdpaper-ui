import type { App } from 'vue';
import _IconSun from './icon-sun.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSun.name = getComponentsPrefix() + _IconSun.name;

const IconSun = Object.assign(_IconSun, {
  install: (app: App) => {
    app.component(_IconSun.name, _IconSun);
  }
});

export default IconSun;