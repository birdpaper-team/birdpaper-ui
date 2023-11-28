import type { App } from 'vue';
import _IconSoundWave from './icon-sound-wave.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSoundWave.name = getComponentsPrefix() + _IconSoundWave.name;

const IconSoundWave = Object.assign(_IconSoundWave, {
  install: (app: App) => {
    app.component(_IconSoundWave.name, _IconSoundWave);
  }
});

export default IconSoundWave;