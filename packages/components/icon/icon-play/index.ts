import type { App } from 'vue';
import _IconPlay from './icon-play.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlay.name = getComponentsPrefix() + _IconPlay.name;

const IconPlay = Object.assign(_IconPlay, {
  install: (app: App) => {
    app.component(_IconPlay.name, _IconPlay);
  }
});

export default IconPlay;