import type { App } from 'vue';
import _IconIcecreamThree from './icon-icecream-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIcecreamThree.name = getComponentsPrefix() + _IconIcecreamThree.name;

const IconIcecreamThree = Object.assign(_IconIcecreamThree, {
  install: (app: App) => {
    app.component(_IconIcecreamThree.name, _IconIcecreamThree);
  }
});

export default IconIcecreamThree;