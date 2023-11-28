import type { App } from 'vue';
import _IconScreenRotation from './icon-screen-rotation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScreenRotation.name = getComponentsPrefix() + _IconScreenRotation.name;

const IconScreenRotation = Object.assign(_IconScreenRotation, {
  install: (app: App) => {
    app.component(_IconScreenRotation.name, _IconScreenRotation);
  }
});

export default IconScreenRotation;