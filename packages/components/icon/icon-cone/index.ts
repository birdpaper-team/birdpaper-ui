import type { App } from 'vue';
import _IconCone from './icon-cone.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCone.name = getComponentsPrefix() + _IconCone.name;

const IconCone = Object.assign(_IconCone, {
  install: (app: App) => {
    app.component(_IconCone.name, _IconCone);
  }
});

export default IconCone;