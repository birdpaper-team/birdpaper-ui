import type { App } from 'vue';
import _IconMusic from './icon-music.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMusic.name = getComponentsPrefix() + _IconMusic.name;

const IconMusic = Object.assign(_IconMusic, {
  install: (app: App) => {
    app.component(_IconMusic.name, _IconMusic);
  }
});

export default IconMusic;