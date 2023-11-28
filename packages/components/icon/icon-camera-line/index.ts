import type { App } from 'vue';
import _IconCameraLine from './icon-camera-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCameraLine.name = getComponentsPrefix() + _IconCameraLine.name;

const IconCameraLine = Object.assign(_IconCameraLine, {
  install: (app: App) => {
    app.component(_IconCameraLine.name, _IconCameraLine);
  }
});

export default IconCameraLine;