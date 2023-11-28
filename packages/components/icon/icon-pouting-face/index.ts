import type { App } from 'vue';
import _IconPoutingFace from './icon-pouting-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPoutingFace.name = getComponentsPrefix() + _IconPoutingFace.name;

const IconPoutingFace = Object.assign(_IconPoutingFace, {
  install: (app: App) => {
    app.component(_IconPoutingFace.name, _IconPoutingFace);
  }
});

export default IconPoutingFace;