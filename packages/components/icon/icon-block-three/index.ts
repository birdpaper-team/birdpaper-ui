import type { App } from 'vue';
import _IconBlockThree from './icon-block-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockThree.name = getComponentsPrefix() + _IconBlockThree.name;

const IconBlockThree = Object.assign(_IconBlockThree, {
  install: (app: App) => {
    app.component(_IconBlockThree.name, _IconBlockThree);
  }
});

export default IconBlockThree;