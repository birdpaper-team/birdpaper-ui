import type { App } from 'vue';
import _IconPeopleSpeak from './icon-people-speak.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleSpeak.name = getComponentsPrefix() + _IconPeopleSpeak.name;

const IconPeopleSpeak = Object.assign(_IconPeopleSpeak, {
  install: (app: App) => {
    app.component(_IconPeopleSpeak.name, _IconPeopleSpeak);
  }
});

export default IconPeopleSpeak;