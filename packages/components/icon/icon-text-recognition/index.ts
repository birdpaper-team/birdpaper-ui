import type { App } from 'vue';
import _IconTextRecognition from './icon-text-recognition.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextRecognition.name = getComponentsPrefix() + _IconTextRecognition.name;

const IconTextRecognition = Object.assign(_IconTextRecognition, {
  install: (app: App) => {
    app.component(_IconTextRecognition.name, _IconTextRecognition);
  }
});

export default IconTextRecognition;