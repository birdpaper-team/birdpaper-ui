import type { App } from 'vue';
import _IconFileGif from './icon-file-gif.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileGif.name = getComponentsPrefix() + _IconFileGif.name;

const IconFileGif = Object.assign(_IconFileGif, {
  install: (app: App) => {
    app.component(_IconFileGif.name, _IconFileGif);
  }
});

export default IconFileGif;