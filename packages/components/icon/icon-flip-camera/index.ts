import type { App } from 'vue';
import _IconFlipCamera from './icon-flip-camera.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlipCamera.name = getComponentsPrefix() + _IconFlipCamera.name;

const IconFlipCamera = Object.assign(_IconFlipCamera, {
  install: (app: App) => {
    app.component(_IconFlipCamera.name, _IconFlipCamera);
  }
});

export default IconFlipCamera;