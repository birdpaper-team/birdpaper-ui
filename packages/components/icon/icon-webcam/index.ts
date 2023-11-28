import type { App } from 'vue';
import _IconWebcam from './icon-webcam.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWebcam.name = getComponentsPrefix() + _IconWebcam.name;

const IconWebcam = Object.assign(_IconWebcam, {
  install: (app: App) => {
    app.component(_IconWebcam.name, _IconWebcam);
  }
});

export default IconWebcam;