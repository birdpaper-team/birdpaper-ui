import type { App } from 'vue';
import _IconCircleThree from './icon-circle-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleThree.name = getComponentsPrefix() + _IconCircleThree.name;

const IconCircleThree = Object.assign(_IconCircleThree, {
  install: (app: App) => {
    app.component(_IconCircleThree.name, _IconCircleThree);
  }
});

export default IconCircleThree;