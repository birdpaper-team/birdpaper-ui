import type { App } from 'vue';
import _IconGlobe from './icon-globe.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGlobe.name = getComponentsPrefix() + _IconGlobe.name;

const IconGlobe = Object.assign(_IconGlobe, {
  install: (app: App) => {
    app.component(_IconGlobe.name, _IconGlobe);
  }
});

export default IconGlobe;