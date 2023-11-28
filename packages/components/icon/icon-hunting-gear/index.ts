import type { App } from 'vue';
import _IconHuntingGear from './icon-hunting-gear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHuntingGear.name = getComponentsPrefix() + _IconHuntingGear.name;

const IconHuntingGear = Object.assign(_IconHuntingGear, {
  install: (app: App) => {
    app.component(_IconHuntingGear.name, _IconHuntingGear);
  }
});

export default IconHuntingGear;