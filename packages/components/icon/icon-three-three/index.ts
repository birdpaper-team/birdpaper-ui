import type { App } from 'vue';
import _IconThreeThree from './icon-three-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThreeThree.name = getComponentsPrefix() + _IconThreeThree.name;

const IconThreeThree = Object.assign(_IconThreeThree, {
  install: (app: App) => {
    app.component(_IconThreeThree.name, _IconThreeThree);
  }
});

export default IconThreeThree;