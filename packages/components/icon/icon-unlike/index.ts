import type { App } from 'vue';
import _IconUnlike from './icon-unlike.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUnlike.name = getComponentsPrefix() + _IconUnlike.name;

const IconUnlike = Object.assign(_IconUnlike, {
  install: (app: App) => {
    app.component(_IconUnlike.name, _IconUnlike);
  }
});

export default IconUnlike;