import type { App } from 'vue';
import _IconFaceWithSmilingOpenEyes from './icon-face-with-smiling-open-eyes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFaceWithSmilingOpenEyes.name = getComponentsPrefix() + _IconFaceWithSmilingOpenEyes.name;

const IconFaceWithSmilingOpenEyes = Object.assign(_IconFaceWithSmilingOpenEyes, {
  install: (app: App) => {
    app.component(_IconFaceWithSmilingOpenEyes.name, _IconFaceWithSmilingOpenEyes);
  }
});

export default IconFaceWithSmilingOpenEyes;