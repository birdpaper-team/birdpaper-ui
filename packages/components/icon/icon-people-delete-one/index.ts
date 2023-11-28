import type { App } from 'vue';
import _IconPeopleDeleteOne from './icon-people-delete-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleDeleteOne.name = getComponentsPrefix() + _IconPeopleDeleteOne.name;

const IconPeopleDeleteOne = Object.assign(_IconPeopleDeleteOne, {
  install: (app: App) => {
    app.component(_IconPeopleDeleteOne.name, _IconPeopleDeleteOne);
  }
});

export default IconPeopleDeleteOne;