import type { App } from 'vue';
import _IconSurprisedFaceWithOpenMouth from './icon-surprised-face-with-open-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSurprisedFaceWithOpenMouth.name = getComponentsPrefix() + _IconSurprisedFaceWithOpenMouth.name;

const IconSurprisedFaceWithOpenMouth = Object.assign(_IconSurprisedFaceWithOpenMouth, {
  install: (app: App) => {
    app.component(_IconSurprisedFaceWithOpenMouth.name, _IconSurprisedFaceWithOpenMouth);
  }
});

export default IconSurprisedFaceWithOpenMouth;