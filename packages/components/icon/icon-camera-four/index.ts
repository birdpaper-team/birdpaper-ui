import type { App } from 'vue';
import _IconCameraFour from './icon-camera-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCameraFour.name = getComponentsPrefix() + _IconCameraFour.name;

const IconCameraFour = Object.assign(_IconCameraFour, {
  install: (app: App) => {
    app.component(_IconCameraFour.name, _IconCameraFour);
  }
});

export default IconCameraFour;