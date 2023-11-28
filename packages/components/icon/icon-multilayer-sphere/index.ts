import type { App } from 'vue';
import _IconMultilayerSphere from './icon-multilayer-sphere.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultilayerSphere.name = getComponentsPrefix() + _IconMultilayerSphere.name;

const IconMultilayerSphere = Object.assign(_IconMultilayerSphere, {
  install: (app: App) => {
    app.component(_IconMultilayerSphere.name, _IconMultilayerSphere);
  }
});

export default IconMultilayerSphere;