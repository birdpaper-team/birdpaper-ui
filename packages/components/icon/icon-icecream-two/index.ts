import type { App } from 'vue';
import _IconIcecreamTwo from './icon-icecream-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIcecreamTwo.name = getComponentsPrefix() + _IconIcecreamTwo.name;

const IconIcecreamTwo = Object.assign(_IconIcecreamTwo, {
  install: (app: App) => {
    app.component(_IconIcecreamTwo.name, _IconIcecreamTwo);
  }
});

export default IconIcecreamTwo;