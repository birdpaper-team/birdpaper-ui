import type { App } from 'vue';
import _IconDeleteThree from './icon-delete-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteThree.name = getComponentsPrefix() + _IconDeleteThree.name;

const IconDeleteThree = Object.assign(_IconDeleteThree, {
  install: (app: App) => {
    app.component(_IconDeleteThree.name, _IconDeleteThree);
  }
});

export default IconDeleteThree;