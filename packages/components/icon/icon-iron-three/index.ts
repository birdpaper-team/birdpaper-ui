import type { App } from 'vue';
import _IconIronThree from './icon-iron-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIronThree.name = getComponentsPrefix() + _IconIronThree.name;

const IconIronThree = Object.assign(_IconIronThree, {
  install: (app: App) => {
    app.component(_IconIronThree.name, _IconIronThree);
  }
});

export default IconIronThree;