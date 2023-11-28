import type { App } from 'vue';
import _IconCubeFour from './icon-cube-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCubeFour.name = getComponentsPrefix() + _IconCubeFour.name;

const IconCubeFour = Object.assign(_IconCubeFour, {
  install: (app: App) => {
    app.component(_IconCubeFour.name, _IconCubeFour);
  }
});

export default IconCubeFour;