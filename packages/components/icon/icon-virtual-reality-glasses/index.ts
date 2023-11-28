import type { App } from 'vue';
import _IconVirtualRealityGlasses from './icon-virtual-reality-glasses.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVirtualRealityGlasses.name = getComponentsPrefix() + _IconVirtualRealityGlasses.name;

const IconVirtualRealityGlasses = Object.assign(_IconVirtualRealityGlasses, {
  install: (app: App) => {
    app.component(_IconVirtualRealityGlasses.name, _IconVirtualRealityGlasses);
  }
});

export default IconVirtualRealityGlasses;