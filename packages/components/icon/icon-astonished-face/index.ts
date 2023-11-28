import type { App } from 'vue';
import _IconAstonishedFace from './icon-astonished-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAstonishedFace.name = getComponentsPrefix() + _IconAstonishedFace.name;

const IconAstonishedFace = Object.assign(_IconAstonishedFace, {
  install: (app: App) => {
    app.component(_IconAstonishedFace.name, _IconAstonishedFace);
  }
});

export default IconAstonishedFace;