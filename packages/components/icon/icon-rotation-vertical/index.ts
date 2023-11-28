import type { App } from 'vue';
import _IconRotationVertical from './icon-rotation-vertical.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotationVertical.name = getComponentsPrefix() + _IconRotationVertical.name;

const IconRotationVertical = Object.assign(_IconRotationVertical, {
  install: (app: App) => {
    app.component(_IconRotationVertical.name, _IconRotationVertical);
  }
});

export default IconRotationVertical;