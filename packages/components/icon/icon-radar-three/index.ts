import type { App } from 'vue';
import _IconRadarThree from './icon-radar-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadarThree.name = getComponentsPrefix() + _IconRadarThree.name;

const IconRadarThree = Object.assign(_IconRadarThree, {
  install: (app: App) => {
    app.component(_IconRadarThree.name, _IconRadarThree);
  }
});

export default IconRadarThree;