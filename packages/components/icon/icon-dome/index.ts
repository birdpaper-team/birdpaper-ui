import type { App } from 'vue';
import _IconDome from './icon-dome.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDome.name = getComponentsPrefix() + _IconDome.name;

const IconDome = Object.assign(_IconDome, {
  install: (app: App) => {
    app.component(_IconDome.name, _IconDome);
  }
});

export default IconDome;