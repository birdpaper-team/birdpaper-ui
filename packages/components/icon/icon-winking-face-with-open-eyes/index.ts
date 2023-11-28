import type { App } from 'vue';
import _IconWinkingFaceWithOpenEyes from './icon-winking-face-with-open-eyes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWinkingFaceWithOpenEyes.name = getComponentsPrefix() + _IconWinkingFaceWithOpenEyes.name;

const IconWinkingFaceWithOpenEyes = Object.assign(_IconWinkingFaceWithOpenEyes, {
  install: (app: App) => {
    app.component(_IconWinkingFaceWithOpenEyes.name, _IconWinkingFaceWithOpenEyes);
  }
});

export default IconWinkingFaceWithOpenEyes;