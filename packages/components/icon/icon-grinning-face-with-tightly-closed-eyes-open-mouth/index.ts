import type { App } from 'vue';
import _IconGrinningFaceWithTightlyClosedEyesOpenMouth from './icon-grinning-face-with-tightly-closed-eyes-open-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGrinningFaceWithTightlyClosedEyesOpenMouth.name = getComponentsPrefix() + _IconGrinningFaceWithTightlyClosedEyesOpenMouth.name;

const IconGrinningFaceWithTightlyClosedEyesOpenMouth = Object.assign(_IconGrinningFaceWithTightlyClosedEyesOpenMouth, {
  install: (app: App) => {
    app.component(_IconGrinningFaceWithTightlyClosedEyesOpenMouth.name, _IconGrinningFaceWithTightlyClosedEyesOpenMouth);
  }
});

export default IconGrinningFaceWithTightlyClosedEyesOpenMouth;