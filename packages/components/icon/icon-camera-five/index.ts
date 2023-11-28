import type { App } from 'vue';
import _IconCameraFive from './icon-camera-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCameraFive.name = getComponentsPrefix() + _IconCameraFive.name;

const IconCameraFive = Object.assign(_IconCameraFive, {
  install: (app: App) => {
    app.component(_IconCameraFive.name, _IconCameraFive);
  }
});

export default IconCameraFive;