import type { App } from 'vue';
import _IconGobletCracking from './icon-goblet-cracking.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGobletCracking.name = getComponentsPrefix() + _IconGobletCracking.name;

const IconGobletCracking = Object.assign(_IconGobletCracking, {
  install: (app: App) => {
    app.component(_IconGobletCracking.name, _IconGobletCracking);
  }
});

export default IconGobletCracking;