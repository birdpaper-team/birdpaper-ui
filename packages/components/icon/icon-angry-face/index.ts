import type { App } from 'vue';
import _IconAngryFace from './icon-angry-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAngryFace.name = getComponentsPrefix() + _IconAngryFace.name;

const IconAngryFace = Object.assign(_IconAngryFace, {
  install: (app: App) => {
    app.component(_IconAngryFace.name, _IconAngryFace);
  }
});

export default IconAngryFace;