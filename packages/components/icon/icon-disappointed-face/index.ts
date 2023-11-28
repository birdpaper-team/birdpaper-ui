import type { App } from 'vue';
import _IconDisappointedFace from './icon-disappointed-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisappointedFace.name = getComponentsPrefix() + _IconDisappointedFace.name;

const IconDisappointedFace = Object.assign(_IconDisappointedFace, {
  install: (app: App) => {
    app.component(_IconDisappointedFace.name, _IconDisappointedFace);
  }
});

export default IconDisappointedFace;