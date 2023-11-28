import type { App } from 'vue';
import _IconSurveillanceCamerasTwo from './icon-surveillance-cameras-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSurveillanceCamerasTwo.name = getComponentsPrefix() + _IconSurveillanceCamerasTwo.name;

const IconSurveillanceCamerasTwo = Object.assign(_IconSurveillanceCamerasTwo, {
  install: (app: App) => {
    app.component(_IconSurveillanceCamerasTwo.name, _IconSurveillanceCamerasTwo);
  }
});

export default IconSurveillanceCamerasTwo;