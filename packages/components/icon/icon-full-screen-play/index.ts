import type { App } from 'vue';
import _IconFullScreenPlay from './icon-full-screen-play.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullScreenPlay.name = getComponentsPrefix() + _IconFullScreenPlay.name;

const IconFullScreenPlay = Object.assign(_IconFullScreenPlay, {
  install: (app: App) => {
    app.component(_IconFullScreenPlay.name, _IconFullScreenPlay);
  }
});

export default IconFullScreenPlay;