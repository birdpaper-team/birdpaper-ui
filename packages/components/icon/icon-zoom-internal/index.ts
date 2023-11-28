import type { App } from 'vue';
import _IconZoomInternal from './icon-zoom-internal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconZoomInternal.name = getComponentsPrefix() + _IconZoomInternal.name;

const IconZoomInternal = Object.assign(_IconZoomInternal, {
  install: (app: App) => {
    app.component(_IconZoomInternal.name, _IconZoomInternal);
  }
});

export default IconZoomInternal;