import type { App } from 'vue';
import _IconMosaic from './icon-mosaic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMosaic.name = getComponentsPrefix() + _IconMosaic.name;

const IconMosaic = Object.assign(_IconMosaic, {
  install: (app: App) => {
    app.component(_IconMosaic.name, _IconMosaic);
  }
});

export default IconMosaic;