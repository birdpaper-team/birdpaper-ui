import type { App } from 'vue';
import _IconBoiler from './icon-boiler.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoiler.name = getComponentsPrefix() + _IconBoiler.name;

const IconBoiler = Object.assign(_IconBoiler, {
  install: (app: App) => {
    app.component(_IconBoiler.name, _IconBoiler);
  }
});

export default IconBoiler;