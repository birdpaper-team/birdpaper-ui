import type { App } from 'vue';
import _IconPieSix from './icon-pie-six.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPieSix.name = getComponentsPrefix() + _IconPieSix.name;

const IconPieSix = Object.assign(_IconPieSix, {
  install: (app: App) => {
    app.component(_IconPieSix.name, _IconPieSix);
  }
});

export default IconPieSix;