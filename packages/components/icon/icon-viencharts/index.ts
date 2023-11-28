import type { App } from 'vue';
import _IconViencharts from './icon-viencharts.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViencharts.name = getComponentsPrefix() + _IconViencharts.name;

const IconViencharts = Object.assign(_IconViencharts, {
  install: (app: App) => {
    app.component(_IconViencharts.name, _IconViencharts);
  }
});

export default IconViencharts;