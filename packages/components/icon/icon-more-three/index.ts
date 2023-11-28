import type { App } from 'vue';
import _IconMoreThree from './icon-more-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoreThree.name = getComponentsPrefix() + _IconMoreThree.name;

const IconMoreThree = Object.assign(_IconMoreThree, {
  install: (app: App) => {
    app.component(_IconMoreThree.name, _IconMoreThree);
  }
});

export default IconMoreThree;