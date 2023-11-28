import type { App } from 'vue';
import _IconFaceWithoutMouth from './icon-face-without-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFaceWithoutMouth.name = getComponentsPrefix() + _IconFaceWithoutMouth.name;

const IconFaceWithoutMouth = Object.assign(_IconFaceWithoutMouth, {
  install: (app: App) => {
    app.component(_IconFaceWithoutMouth.name, _IconFaceWithoutMouth);
  }
});

export default IconFaceWithoutMouth;