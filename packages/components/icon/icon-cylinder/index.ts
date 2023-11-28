import type { App } from 'vue';
import _IconCylinder from './icon-cylinder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCylinder.name = getComponentsPrefix() + _IconCylinder.name;

const IconCylinder = Object.assign(_IconCylinder, {
  install: (app: App) => {
    app.component(_IconCylinder.name, _IconCylinder);
  }
});

export default IconCylinder;