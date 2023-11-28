import type { App } from 'vue';
import _IconCameraTwo from './icon-camera-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCameraTwo.name = getComponentsPrefix() + _IconCameraTwo.name;

const IconCameraTwo = Object.assign(_IconCameraTwo, {
  install: (app: App) => {
    app.component(_IconCameraTwo.name, _IconCameraTwo);
  }
});

export default IconCameraTwo;