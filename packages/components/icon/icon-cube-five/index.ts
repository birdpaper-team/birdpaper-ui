import type { App } from 'vue';
import _IconCubeFive from './icon-cube-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCubeFive.name = getComponentsPrefix() + _IconCubeFive.name;

const IconCubeFive = Object.assign(_IconCubeFive, {
  install: (app: App) => {
    app.component(_IconCubeFive.name, _IconCubeFive);
  }
});

export default IconCubeFive;