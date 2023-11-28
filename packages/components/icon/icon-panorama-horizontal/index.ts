import type { App } from 'vue';
import _IconPanoramaHorizontal from './icon-panorama-horizontal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPanoramaHorizontal.name = getComponentsPrefix() + _IconPanoramaHorizontal.name;

const IconPanoramaHorizontal = Object.assign(_IconPanoramaHorizontal, {
  install: (app: App) => {
    app.component(_IconPanoramaHorizontal.name, _IconPanoramaHorizontal);
  }
});

export default IconPanoramaHorizontal;