import type { App } from 'vue';
import _IconTurnOn from './icon-turn-on.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTurnOn.name = getComponentsPrefix() + _IconTurnOn.name;

const IconTurnOn = Object.assign(_IconTurnOn, {
  install: (app: App) => {
    app.component(_IconTurnOn.name, _IconTurnOn);
  }
});

export default IconTurnOn;