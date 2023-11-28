import type { App } from 'vue';
import _IconConfoundedFace from './icon-confounded-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConfoundedFace.name = getComponentsPrefix() + _IconConfoundedFace.name;

const IconConfoundedFace = Object.assign(_IconConfoundedFace, {
  install: (app: App) => {
    app.component(_IconConfoundedFace.name, _IconConfoundedFace);
  }
});

export default IconConfoundedFace;