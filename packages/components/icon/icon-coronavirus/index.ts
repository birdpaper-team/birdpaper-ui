import type { App } from 'vue';
import _IconCoronavirus from './icon-coronavirus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCoronavirus.name = getComponentsPrefix() + _IconCoronavirus.name;

const IconCoronavirus = Object.assign(_IconCoronavirus, {
  install: (app: App) => {
    app.component(_IconCoronavirus.name, _IconCoronavirus);
  }
});

export default IconCoronavirus;