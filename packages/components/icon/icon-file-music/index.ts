import type { App } from 'vue';
import _IconFileMusic from './icon-file-music.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileMusic.name = getComponentsPrefix() + _IconFileMusic.name;

const IconFileMusic = Object.assign(_IconFileMusic, {
  install: (app: App) => {
    app.component(_IconFileMusic.name, _IconFileMusic);
  }
});

export default IconFileMusic;