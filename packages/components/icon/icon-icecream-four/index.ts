import type { App } from 'vue';
import _IconIcecreamFour from './icon-icecream-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIcecreamFour.name = getComponentsPrefix() + _IconIcecreamFour.name;

const IconIcecreamFour = Object.assign(_IconIcecreamFour, {
  install: (app: App) => {
    app.component(_IconIcecreamFour.name, _IconIcecreamFour);
  }
});

export default IconIcecreamFour;