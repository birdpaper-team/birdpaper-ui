import type { App } from 'vue';
import _IconAudioFile from './icon-audio-file.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAudioFile.name = getComponentsPrefix() + _IconAudioFile.name;

const IconAudioFile = Object.assign(_IconAudioFile, {
  install: (app: App) => {
    app.component(_IconAudioFile.name, _IconAudioFile);
  }
});

export default IconAudioFile;