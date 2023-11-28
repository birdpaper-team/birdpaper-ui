import type { App } from 'vue';
import _IconYoutubeLine from './icon-youtube-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconYoutubeLine.name = getComponentsPrefix() + _IconYoutubeLine.name;

const IconYoutubeLine = Object.assign(_IconYoutubeLine, {
  install: (app: App) => {
    app.component(_IconYoutubeLine.name, _IconYoutubeLine);
  }
});

export default IconYoutubeLine;