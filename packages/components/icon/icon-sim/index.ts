import type { App } from 'vue';
import _IconSim from './icon-sim.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSim.name = getComponentsPrefix() + _IconSim.name;

const IconSim = Object.assign(_IconSim, {
  install: (app: App) => {
    app.component(_IconSim.name, _IconSim);
  }
});

export default IconSim;