import type { App } from 'vue';
import _IconSlightlyFrowningFaceWhitOpenMouth from './icon-slightly-frowning-face-whit-open-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlightlyFrowningFaceWhitOpenMouth.name = getComponentsPrefix() + _IconSlightlyFrowningFaceWhitOpenMouth.name;

const IconSlightlyFrowningFaceWhitOpenMouth = Object.assign(_IconSlightlyFrowningFaceWhitOpenMouth, {
  install: (app: App) => {
    app.component(_IconSlightlyFrowningFaceWhitOpenMouth.name, _IconSlightlyFrowningFaceWhitOpenMouth);
  }
});

export default IconSlightlyFrowningFaceWhitOpenMouth;