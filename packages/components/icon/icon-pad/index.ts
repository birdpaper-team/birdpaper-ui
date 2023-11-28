import type { App } from 'vue';
import _IconPad from './icon-pad.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPad.name = getComponentsPrefix() + _IconPad.name;

const IconPad = Object.assign(_IconPad, {
  install: (app: App) => {
    app.component(_IconPad.name, _IconPad);
  }
});

export default IconPad;