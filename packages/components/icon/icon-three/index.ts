import type { App } from 'vue';
import _IconThree from './icon-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThree.name = getComponentsPrefix() + _IconThree.name;

const IconThree = Object.assign(_IconThree, {
  install: (app: App) => {
    app.component(_IconThree.name, _IconThree);
  }
});

export default IconThree;