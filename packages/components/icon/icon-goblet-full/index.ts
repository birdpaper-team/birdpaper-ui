import type { App } from 'vue';
import _IconGobletFull from './icon-goblet-full.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGobletFull.name = getComponentsPrefix() + _IconGobletFull.name;

const IconGobletFull = Object.assign(_IconGobletFull, {
  install: (app: App) => {
    app.component(_IconGobletFull.name, _IconGobletFull);
  }
});

export default IconGobletFull;