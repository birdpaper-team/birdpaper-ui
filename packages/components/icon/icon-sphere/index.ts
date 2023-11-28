import type { App } from 'vue';
import _IconSphere from './icon-sphere.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSphere.name = getComponentsPrefix() + _IconSphere.name;

const IconSphere = Object.assign(_IconSphere, {
  install: (app: App) => {
    app.component(_IconSphere.name, _IconSphere);
  }
});

export default IconSphere;