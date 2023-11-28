import type { App } from 'vue';
import _IconLandscape from './icon-landscape.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLandscape.name = getComponentsPrefix() + _IconLandscape.name;

const IconLandscape = Object.assign(_IconLandscape, {
  install: (app: App) => {
    app.component(_IconLandscape.name, _IconLandscape);
  }
});

export default IconLandscape;