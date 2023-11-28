import type { App } from 'vue';
import _IconRotation from './icon-rotation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotation.name = getComponentsPrefix() + _IconRotation.name;

const IconRotation = Object.assign(_IconRotation, {
  install: (app: App) => {
    app.component(_IconRotation.name, _IconRotation);
  }
});

export default IconRotation;