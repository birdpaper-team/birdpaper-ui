import type { App } from 'vue';
import _IconZoom from './icon-zoom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconZoom.name = getComponentsPrefix() + _IconZoom.name;

const IconZoom = Object.assign(_IconZoom, {
  install: (app: App) => {
    app.component(_IconZoom.name, _IconZoom);
  }
});

export default IconZoom;