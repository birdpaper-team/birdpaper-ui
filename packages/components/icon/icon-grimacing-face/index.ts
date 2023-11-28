import type { App } from 'vue';
import _IconGrimacingFace from './icon-grimacing-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGrimacingFace.name = getComponentsPrefix() + _IconGrimacingFace.name;

const IconGrimacingFace = Object.assign(_IconGrimacingFace, {
  install: (app: App) => {
    app.component(_IconGrimacingFace.name, _IconGrimacingFace);
  }
});

export default IconGrimacingFace;