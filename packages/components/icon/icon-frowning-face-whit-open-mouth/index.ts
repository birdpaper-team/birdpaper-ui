import type { App } from 'vue';
import _IconFrowningFaceWhitOpenMouth from './icon-frowning-face-whit-open-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFrowningFaceWhitOpenMouth.name = getComponentsPrefix() + _IconFrowningFaceWhitOpenMouth.name;

const IconFrowningFaceWhitOpenMouth = Object.assign(_IconFrowningFaceWhitOpenMouth, {
  install: (app: App) => {
    app.component(_IconFrowningFaceWhitOpenMouth.name, _IconFrowningFaceWhitOpenMouth);
  }
});

export default IconFrowningFaceWhitOpenMouth;