import type { App } from 'vue';
import _IconAddMusic from './icon-add-music.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddMusic.name = getComponentsPrefix() + _IconAddMusic.name;

const IconAddMusic = Object.assign(_IconAddMusic, {
  install: (app: App) => {
    app.component(_IconAddMusic.name, _IconAddMusic);
  }
});

export default IconAddMusic;