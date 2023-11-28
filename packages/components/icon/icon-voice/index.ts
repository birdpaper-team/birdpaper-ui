import type { App } from 'vue';
import _IconVoice from './icon-voice.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVoice.name = getComponentsPrefix() + _IconVoice.name;

const IconVoice = Object.assign(_IconVoice, {
  install: (app: App) => {
    app.component(_IconVoice.name, _IconVoice);
  }
});

export default IconVoice;