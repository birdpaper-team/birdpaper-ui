import type { App } from 'vue';
import _IconGrinningFace from './icon-grinning-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGrinningFace.name = getComponentsPrefix() + _IconGrinningFace.name;

const IconGrinningFace = Object.assign(_IconGrinningFace, {
  install: (app: App) => {
    app.component(_IconGrinningFace.name, _IconGrinningFace);
  }
});

export default IconGrinningFace;