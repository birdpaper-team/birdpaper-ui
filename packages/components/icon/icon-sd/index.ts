import type { App } from 'vue';
import _IconSd from './icon-sd.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSd.name = getComponentsPrefix() + _IconSd.name;

const IconSd = Object.assign(_IconSd, {
  install: (app: App) => {
    app.component(_IconSd.name, _IconSd);
  }
});

export default IconSd;