import type { App } from 'vue';
import _IconLayoutThree from './icon-layout-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLayoutThree.name = getComponentsPrefix() + _IconLayoutThree.name;

const IconLayoutThree = Object.assign(_IconLayoutThree, {
  install: (app: App) => {
    app.component(_IconLayoutThree.name, _IconLayoutThree);
  }
});

export default IconLayoutThree;