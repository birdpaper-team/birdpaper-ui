import type { App } from 'vue';
import _IconPause from './icon-pause.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPause.name = getComponentsPrefix() + _IconPause.name;

const IconPause = Object.assign(_IconPause, {
  install: (app: App) => {
    app.component(_IconPause.name, _IconPause);
  }
});

export default IconPause;