import type { App } from 'vue';
import _IconZoomIn from './icon-zoom-in.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconZoomIn.name = getComponentsPrefix() + _IconZoomIn.name;

const IconZoomIn = Object.assign(_IconZoomIn, {
  install: (app: App) => {
    app.component(_IconZoomIn.name, _IconZoomIn);
  }
});

export default IconZoomIn;