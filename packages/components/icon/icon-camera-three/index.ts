import type { App } from 'vue';
import _IconCameraThree from './icon-camera-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCameraThree.name = getComponentsPrefix() + _IconCameraThree.name;

const IconCameraThree = Object.assign(_IconCameraThree, {
  install: (app: App) => {
    app.component(_IconCameraThree.name, _IconCameraThree);
  }
});

export default IconCameraThree;