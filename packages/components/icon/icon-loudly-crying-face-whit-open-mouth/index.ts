import type { App } from 'vue';
import _IconLoudlyCryingFaceWhitOpenMouth from './icon-loudly-crying-face-whit-open-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoudlyCryingFaceWhitOpenMouth.name = getComponentsPrefix() + _IconLoudlyCryingFaceWhitOpenMouth.name;

const IconLoudlyCryingFaceWhitOpenMouth = Object.assign(_IconLoudlyCryingFaceWhitOpenMouth, {
  install: (app: App) => {
    app.component(_IconLoudlyCryingFaceWhitOpenMouth.name, _IconLoudlyCryingFaceWhitOpenMouth);
  }
});

export default IconLoudlyCryingFaceWhitOpenMouth;