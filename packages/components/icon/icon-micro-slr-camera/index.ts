import type { App } from 'vue';
import _IconMicroSlrCamera from './icon-micro-slr-camera.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMicroSlrCamera.name = getComponentsPrefix() + _IconMicroSlrCamera.name;

const IconMicroSlrCamera = Object.assign(_IconMicroSlrCamera, {
  install: (app: App) => {
    app.component(_IconMicroSlrCamera.name, _IconMicroSlrCamera);
  }
});

export default IconMicroSlrCamera;