import type { App } from 'vue';
import _IconFaceRecognition from './icon-face-recognition.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFaceRecognition.name = getComponentsPrefix() + _IconFaceRecognition.name;

const IconFaceRecognition = Object.assign(_IconFaceRecognition, {
  install: (app: App) => {
    app.component(_IconFaceRecognition.name, _IconFaceRecognition);
  }
});

export default IconFaceRecognition;