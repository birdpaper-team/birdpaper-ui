import type { App } from 'vue';
import _IconConfusedFace from './icon-confused-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConfusedFace.name = getComponentsPrefix() + _IconConfusedFace.name;

const IconConfusedFace = Object.assign(_IconConfusedFace, {
  install: (app: App) => {
    app.component(_IconConfusedFace.name, _IconConfusedFace);
  }
});

export default IconConfusedFace;