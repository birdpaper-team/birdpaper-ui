import type { App } from 'vue';
import _IconFileMusicOne from './icon-file-music-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileMusicOne.name = getComponentsPrefix() + _IconFileMusicOne.name;

const IconFileMusicOne = Object.assign(_IconFileMusicOne, {
  install: (app: App) => {
    app.component(_IconFileMusicOne.name, _IconFileMusicOne);
  }
});

export default IconFileMusicOne;