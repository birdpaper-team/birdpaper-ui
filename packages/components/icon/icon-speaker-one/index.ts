import type { App } from 'vue';
import _IconSpeakerOne from './icon-speaker-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpeakerOne.name = getComponentsPrefix() + _IconSpeakerOne.name;

const IconSpeakerOne = Object.assign(_IconSpeakerOne, {
  install: (app: App) => {
    app.component(_IconSpeakerOne.name, _IconSpeakerOne);
  }
});

export default IconSpeakerOne;