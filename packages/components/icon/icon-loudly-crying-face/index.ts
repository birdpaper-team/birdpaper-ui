import type { App } from 'vue';
import _IconLoudlyCryingFace from './icon-loudly-crying-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoudlyCryingFace.name = getComponentsPrefix() + _IconLoudlyCryingFace.name;

const IconLoudlyCryingFace = Object.assign(_IconLoudlyCryingFace, {
  install: (app: App) => {
    app.component(_IconLoudlyCryingFace.name, _IconLoudlyCryingFace);
  }
});

export default IconLoudlyCryingFace;