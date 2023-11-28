import type { App } from 'vue';
import _IconDistraughtFace from './icon-distraught-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDistraughtFace.name = getComponentsPrefix() + _IconDistraughtFace.name;

const IconDistraughtFace = Object.assign(_IconDistraughtFace, {
  install: (app: App) => {
    app.component(_IconDistraughtFace.name, _IconDistraughtFace);
  }
});

export default IconDistraughtFace;