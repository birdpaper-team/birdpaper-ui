import type { App } from 'vue';
import _IconLayers from './icon-layers.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLayers.name = getComponentsPrefix() + _IconLayers.name;

const IconLayers = Object.assign(_IconLayers, {
  install: (app: App) => {
    app.component(_IconLayers.name, _IconLayers);
  }
});

export default IconLayers;