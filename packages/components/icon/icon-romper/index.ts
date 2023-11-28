import type { App } from 'vue';
import _IconRomper from './icon-romper.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRomper.name = getComponentsPrefix() + _IconRomper.name;

const IconRomper = Object.assign(_IconRomper, {
  install: (app: App) => {
    app.component(_IconRomper.name, _IconRomper);
  }
});

export default IconRomper;