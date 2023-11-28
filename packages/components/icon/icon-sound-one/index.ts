import type { App } from 'vue';
import _IconSoundOne from './icon-sound-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSoundOne.name = getComponentsPrefix() + _IconSoundOne.name;

const IconSoundOne = Object.assign(_IconSoundOne, {
  install: (app: App) => {
    app.component(_IconSoundOne.name, _IconSoundOne);
  }
});

export default IconSoundOne;