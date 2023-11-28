import type { App } from 'vue';
import _IconSoundModuleLine from './icon-sound-module-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSoundModuleLine.name = getComponentsPrefix() + _IconSoundModuleLine.name;

const IconSoundModuleLine = Object.assign(_IconSoundModuleLine, {
  install: (app: App) => {
    app.component(_IconSoundModuleLine.name, _IconSoundModuleLine);
  }
});

export default IconSoundModuleLine;