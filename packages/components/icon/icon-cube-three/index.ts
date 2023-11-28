import type { App } from 'vue';
import _IconCubeThree from './icon-cube-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCubeThree.name = getComponentsPrefix() + _IconCubeThree.name;

const IconCubeThree = Object.assign(_IconCubeThree, {
  install: (app: App) => {
    app.component(_IconCubeThree.name, _IconCubeThree);
  }
});

export default IconCubeThree;