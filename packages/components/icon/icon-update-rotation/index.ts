import type { App } from 'vue';
import _IconUpdateRotation from './icon-update-rotation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpdateRotation.name = getComponentsPrefix() + _IconUpdateRotation.name;

const IconUpdateRotation = Object.assign(_IconUpdateRotation, {
  install: (app: App) => {
    app.component(_IconUpdateRotation.name, _IconUpdateRotation);
  }
});

export default IconUpdateRotation;