import type { App } from 'vue';
import _IconSsd from './icon-ssd.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSsd.name = getComponentsPrefix() + _IconSsd.name;

const IconSsd = Object.assign(_IconSsd, {
  install: (app: App) => {
    app.component(_IconSsd.name, _IconSsd);
  }
});

export default IconSsd;