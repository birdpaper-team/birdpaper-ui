import type { App } from 'vue';
import _IconShip from './icon-ship.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShip.name = getComponentsPrefix() + _IconShip.name;

const IconShip = Object.assign(_IconShip, {
  install: (app: App) => {
    app.component(_IconShip.name, _IconShip);
  }
});

export default IconShip;