import type { App } from 'vue';
import _IconAsterisk from './icon-asterisk.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAsterisk.name = getComponentsPrefix() + _IconAsterisk.name;

const IconAsterisk = Object.assign(_IconAsterisk, {
  install: (app: App) => {
    app.component(_IconAsterisk.name, _IconAsterisk);
  }
});

export default IconAsterisk;