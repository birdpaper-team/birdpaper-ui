import type { App } from 'vue';
import _IconWomenCoat from './icon-women-coat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWomenCoat.name = getComponentsPrefix() + _IconWomenCoat.name;

const IconWomenCoat = Object.assign(_IconWomenCoat, {
  install: (app: App) => {
    app.component(_IconWomenCoat.name, _IconWomenCoat);
  }
});

export default IconWomenCoat;