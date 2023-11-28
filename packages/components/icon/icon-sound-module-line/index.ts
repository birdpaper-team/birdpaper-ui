import type { App } from 'vue';
import _IconSoundModuleLine from './icon-sound-module-line.vue';

const IconSoundModuleLine = Object.assign(_IconSoundModuleLine, {
  install: (app: App) => {
    app.component(_IconSoundModuleLine.name, _IconSoundModuleLine);
  }
});

export default IconSoundModuleLine;