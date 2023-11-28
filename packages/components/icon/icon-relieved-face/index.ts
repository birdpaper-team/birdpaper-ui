import type { App } from 'vue';
import _IconRelievedFace from './icon-relieved-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRelievedFace.name = getComponentsPrefix() + _IconRelievedFace.name;

const IconRelievedFace = Object.assign(_IconRelievedFace, {
  install: (app: App) => {
    app.component(_IconRelievedFace.name, _IconRelievedFace);
  }
});

export default IconRelievedFace;