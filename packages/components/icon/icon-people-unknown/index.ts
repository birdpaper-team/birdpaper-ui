import type { App } from 'vue';
import _IconPeopleUnknown from './icon-people-unknown.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleUnknown.name = getComponentsPrefix() + _IconPeopleUnknown.name;

const IconPeopleUnknown = Object.assign(_IconPeopleUnknown, {
  install: (app: App) => {
    app.component(_IconPeopleUnknown.name, _IconPeopleUnknown);
  }
});

export default IconPeopleUnknown;