import type { App } from 'vue';
import _IconPeopleRight from './icon-people-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleRight.name = getComponentsPrefix() + _IconPeopleRight.name;

const IconPeopleRight = Object.assign(_IconPeopleRight, {
  install: (app: App) => {
    app.component(_IconPeopleRight.name, _IconPeopleRight);
  }
});

export default IconPeopleRight;