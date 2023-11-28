import type { App } from 'vue';
import _IconSurveillanceCameras from './icon-surveillance-cameras.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSurveillanceCameras.name = getComponentsPrefix() + _IconSurveillanceCameras.name;

const IconSurveillanceCameras = Object.assign(_IconSurveillanceCameras, {
  install: (app: App) => {
    app.component(_IconSurveillanceCameras.name, _IconSurveillanceCameras);
  }
});

export default IconSurveillanceCameras;