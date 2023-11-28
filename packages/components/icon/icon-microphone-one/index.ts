import type { App } from 'vue';
import _IconMicrophoneOne from './icon-microphone-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMicrophoneOne.name = getComponentsPrefix() + _IconMicrophoneOne.name;

const IconMicrophoneOne = Object.assign(_IconMicrophoneOne, {
  install: (app: App) => {
    app.component(_IconMicrophoneOne.name, _IconMicrophoneOne);
  }
});

export default IconMicrophoneOne;