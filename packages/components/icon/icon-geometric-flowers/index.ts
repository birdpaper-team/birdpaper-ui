import type { App } from 'vue';
import _IconGeometricFlowers from './icon-geometric-flowers.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGeometricFlowers.name = getComponentsPrefix() + _IconGeometricFlowers.name;

const IconGeometricFlowers = Object.assign(_IconGeometricFlowers, {
  install: (app: App) => {
    app.component(_IconGeometricFlowers.name, _IconGeometricFlowers);
  }
});

export default IconGeometricFlowers;