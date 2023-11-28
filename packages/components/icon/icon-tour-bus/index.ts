import type { App } from 'vue';
import _IconTourBus from './icon-tour-bus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTourBus.name = getComponentsPrefix() + _IconTourBus.name;

const IconTourBus = Object.assign(_IconTourBus, {
  install: (app: App) => {
    app.component(_IconTourBus.name, _IconTourBus);
  }
});

export default IconTourBus;