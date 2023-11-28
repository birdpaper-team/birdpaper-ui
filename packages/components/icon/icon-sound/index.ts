import type { App } from 'vue';
import _IconSound from './icon-sound.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSound.name = getComponentsPrefix() + _IconSound.name;

const IconSound = Object.assign(_IconSound, {
  install: (app: App) => {
    app.component(_IconSound.name, _IconSound);
  }
});

export default IconSound;