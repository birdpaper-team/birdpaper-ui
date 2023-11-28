import type { App } from 'vue';
import _IconAcceleration from './icon-acceleration.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAcceleration.name = getComponentsPrefix() + _IconAcceleration.name;

const IconAcceleration = Object.assign(_IconAcceleration, {
  install: (app: App) => {
    app.component(_IconAcceleration.name, _IconAcceleration);
  }
});

export default IconAcceleration;