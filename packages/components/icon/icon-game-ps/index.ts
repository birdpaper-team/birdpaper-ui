import type { App } from 'vue';
import _IconGamePs from './icon-game-ps.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGamePs.name = getComponentsPrefix() + _IconGamePs.name;

const IconGamePs = Object.assign(_IconGamePs, {
  install: (app: App) => {
    app.component(_IconGamePs.name, _IconGamePs);
  }
});

export default IconGamePs;