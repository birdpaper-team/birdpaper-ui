import type { App } from 'vue';
import _IconWorriedFace from './icon-worried-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWorriedFace.name = getComponentsPrefix() + _IconWorriedFace.name;

const IconWorriedFace = Object.assign(_IconWorriedFace, {
  install: (app: App) => {
    app.component(_IconWorriedFace.name, _IconWorriedFace);
  }
});

export default IconWorriedFace;