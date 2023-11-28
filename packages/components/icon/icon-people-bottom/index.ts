import type { App } from 'vue';
import _IconPeopleBottom from './icon-people-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleBottom.name = getComponentsPrefix() + _IconPeopleBottom.name;

const IconPeopleBottom = Object.assign(_IconPeopleBottom, {
  install: (app: App) => {
    app.component(_IconPeopleBottom.name, _IconPeopleBottom);
  }
});

export default IconPeopleBottom;