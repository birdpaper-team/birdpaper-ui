import type { App } from 'vue';
import _IconEarth from './icon-earth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEarth.name = getComponentsPrefix() + _IconEarth.name;

const IconEarth = Object.assign(_IconEarth, {
  install: (app: App) => {
    app.component(_IconEarth.name, _IconEarth);
  }
});

export default IconEarth;