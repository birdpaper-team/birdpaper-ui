import type { App } from 'vue';
import _IconBus from './icon-bus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBus.name = getComponentsPrefix() + _IconBus.name;

const IconBus = Object.assign(_IconBus, {
  install: (app: App) => {
    app.component(_IconBus.name, _IconBus);
  }
});

export default IconBus;