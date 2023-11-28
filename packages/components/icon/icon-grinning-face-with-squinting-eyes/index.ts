import type { App } from 'vue';
import _IconGrinningFaceWithSquintingEyes from './icon-grinning-face-with-squinting-eyes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGrinningFaceWithSquintingEyes.name = getComponentsPrefix() + _IconGrinningFaceWithSquintingEyes.name;

const IconGrinningFaceWithSquintingEyes = Object.assign(_IconGrinningFaceWithSquintingEyes, {
  install: (app: App) => {
    app.component(_IconGrinningFaceWithSquintingEyes.name, _IconGrinningFaceWithSquintingEyes);
  }
});

export default IconGrinningFaceWithSquintingEyes;