import type { App } from 'vue';
import _IconDetection from './icon-detection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDetection.name = getComponentsPrefix() + _IconDetection.name;

const IconDetection = Object.assign(_IconDetection, {
  install: (app: App) => {
    app.component(_IconDetection.name, _IconDetection);
  }
});

export default IconDetection;