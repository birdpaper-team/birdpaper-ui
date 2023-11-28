import type { App } from 'vue';
import _IconCameraOne from './icon-camera-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCameraOne.name = getComponentsPrefix() + _IconCameraOne.name;

const IconCameraOne = Object.assign(_IconCameraOne, {
  install: (app: App) => {
    app.component(_IconCameraOne.name, _IconCameraOne);
  }
});

export default IconCameraOne;