import type { App } from 'vue';
import _IconPalace from './icon-palace.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPalace.name = getComponentsPrefix() + _IconPalace.name;

const IconPalace = Object.assign(_IconPalace, {
  install: (app: App) => {
    app.component(_IconPalace.name, _IconPalace);
  }
});

export default IconPalace;