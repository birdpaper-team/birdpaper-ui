import type { App } from 'vue';
import _IconRotationHorizontal from './icon-rotation-horizontal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotationHorizontal.name = getComponentsPrefix() + _IconRotationHorizontal.name;

const IconRotationHorizontal = Object.assign(_IconRotationHorizontal, {
  install: (app: App) => {
    app.component(_IconRotationHorizontal.name, _IconRotationHorizontal);
  }
});

export default IconRotationHorizontal;