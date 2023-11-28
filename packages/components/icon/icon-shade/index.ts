import type { App } from 'vue';
import _IconShade from './icon-shade.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShade.name = getComponentsPrefix() + _IconShade.name;

const IconShade = Object.assign(_IconShade, {
  install: (app: App) => {
    app.component(_IconShade.name, _IconShade);
  }
});

export default IconShade;