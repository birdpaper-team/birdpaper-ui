import type { App } from 'vue';
import _IconFlashlamp from './icon-flashlamp.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlashlamp.name = getComponentsPrefix() + _IconFlashlamp.name;

const IconFlashlamp = Object.assign(_IconFlashlamp, {
  install: (app: App) => {
    app.component(_IconFlashlamp.name, _IconFlashlamp);
  }
});

export default IconFlashlamp;