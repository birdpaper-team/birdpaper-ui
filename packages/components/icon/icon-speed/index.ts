import type { App } from 'vue';
import _IconSpeed from './icon-speed.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpeed.name = getComponentsPrefix() + _IconSpeed.name;

const IconSpeed = Object.assign(_IconSpeed, {
  install: (app: App) => {
    app.component(_IconSpeed.name, _IconSpeed);
  }
});

export default IconSpeed;