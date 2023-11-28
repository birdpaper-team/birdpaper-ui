import type { App } from 'vue';
import _IconJuice from './icon-juice.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconJuice.name = getComponentsPrefix() + _IconJuice.name;

const IconJuice = Object.assign(_IconJuice, {
  install: (app: App) => {
    app.component(_IconJuice.name, _IconJuice);
  }
});

export default IconJuice;