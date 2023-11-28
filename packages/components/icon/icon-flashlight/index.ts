import type { App } from 'vue';
import _IconFlashlight from './icon-flashlight.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlashlight.name = getComponentsPrefix() + _IconFlashlight.name;

const IconFlashlight = Object.assign(_IconFlashlight, {
  install: (app: App) => {
    app.component(_IconFlashlight.name, _IconFlashlight);
  }
});

export default IconFlashlight;