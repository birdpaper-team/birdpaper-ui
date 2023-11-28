import type { App } from 'vue';
import _IconDuck from './icon-duck.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDuck.name = getComponentsPrefix() + _IconDuck.name;

const IconDuck = Object.assign(_IconDuck, {
  install: (app: App) => {
    app.component(_IconDuck.name, _IconDuck);
  }
});

export default IconDuck;