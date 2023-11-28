import type { App } from 'vue';
import _IconUpsideDownFace from './icon-upside-down-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpsideDownFace.name = getComponentsPrefix() + _IconUpsideDownFace.name;

const IconUpsideDownFace = Object.assign(_IconUpsideDownFace, {
  install: (app: App) => {
    app.component(_IconUpsideDownFace.name, _IconUpsideDownFace);
  }
});

export default IconUpsideDownFace;