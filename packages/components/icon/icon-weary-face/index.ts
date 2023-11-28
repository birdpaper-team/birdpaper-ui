import type { App } from 'vue';
import _IconWearyFace from './icon-weary-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWearyFace.name = getComponentsPrefix() + _IconWearyFace.name;

const IconWearyFace = Object.assign(_IconWearyFace, {
  install: (app: App) => {
    app.component(_IconWearyFace.name, _IconWearyFace);
  }
});

export default IconWearyFace;