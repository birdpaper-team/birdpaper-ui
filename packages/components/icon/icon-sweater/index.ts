import type { App } from 'vue';
import _IconSweater from './icon-sweater.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSweater.name = getComponentsPrefix() + _IconSweater.name;

const IconSweater = Object.assign(_IconSweater, {
  install: (app: App) => {
    app.component(_IconSweater.name, _IconSweater);
  }
});

export default IconSweater;