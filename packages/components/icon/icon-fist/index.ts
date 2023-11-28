import type { App } from 'vue';
import _IconFist from './icon-fist.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFist.name = getComponentsPrefix() + _IconFist.name;

const IconFist = Object.assign(_IconFist, {
  install: (app: App) => {
    app.component(_IconFist.name, _IconFist);
  }
});

export default IconFist;