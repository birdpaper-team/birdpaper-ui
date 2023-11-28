import type { App } from 'vue';
import _IconPlayCycle from './icon-play-cycle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayCycle.name = getComponentsPrefix() + _IconPlayCycle.name;

const IconPlayCycle = Object.assign(_IconPlayCycle, {
  install: (app: App) => {
    app.component(_IconPlayCycle.name, _IconPlayCycle);
  }
});

export default IconPlayCycle;