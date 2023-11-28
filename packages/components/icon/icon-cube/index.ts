import type { App } from 'vue';
import _IconCube from './icon-cube.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCube.name = getComponentsPrefix() + _IconCube.name;

const IconCube = Object.assign(_IconCube, {
  install: (app: App) => {
    app.component(_IconCube.name, _IconCube);
  }
});

export default IconCube;