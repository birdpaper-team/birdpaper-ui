import type { App } from 'vue';
import _IconYoutube from './icon-youtube.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconYoutube.name = getComponentsPrefix() + _IconYoutube.name;

const IconYoutube = Object.assign(_IconYoutube, {
  install: (app: App) => {
    app.component(_IconYoutube.name, _IconYoutube);
  }
});

export default IconYoutube;