import type { App } from 'vue';
import _IconPeopleLeft from './icon-people-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleLeft.name = getComponentsPrefix() + _IconPeopleLeft.name;

const IconPeopleLeft = Object.assign(_IconPeopleLeft, {
  install: (app: App) => {
    app.component(_IconPeopleLeft.name, _IconPeopleLeft);
  }
});

export default IconPeopleLeft;