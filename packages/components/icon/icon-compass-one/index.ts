import type { App } from 'vue';
import _IconCompassOne from './icon-compass-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCompassOne.name = getComponentsPrefix() + _IconCompassOne.name;

const IconCompassOne = Object.assign(_IconCompassOne, {
  install: (app: App) => {
    app.component(_IconCompassOne.name, _IconCompassOne);
  }
});

export default IconCompassOne;