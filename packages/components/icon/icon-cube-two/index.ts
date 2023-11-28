import type { App } from 'vue';
import _IconCubeTwo from './icon-cube-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCubeTwo.name = getComponentsPrefix() + _IconCubeTwo.name;

const IconCubeTwo = Object.assign(_IconCubeTwo, {
  install: (app: App) => {
    app.component(_IconCubeTwo.name, _IconCubeTwo);
  }
});

export default IconCubeTwo;