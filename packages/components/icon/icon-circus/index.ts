import type { App } from 'vue';
import _IconCircus from './icon-circus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircus.name = getComponentsPrefix() + _IconCircus.name;

const IconCircus = Object.assign(_IconCircus, {
  install: (app: App) => {
    app.component(_IconCircus.name, _IconCircus);
  }
});

export default IconCircus;