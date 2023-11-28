import type { App } from 'vue';
import _IconPeopleDelete from './icon-people-delete.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleDelete.name = getComponentsPrefix() + _IconPeopleDelete.name;

const IconPeopleDelete = Object.assign(_IconPeopleDelete, {
  install: (app: App) => {
    app.component(_IconPeopleDelete.name, _IconPeopleDelete);
  }
});

export default IconPeopleDelete;