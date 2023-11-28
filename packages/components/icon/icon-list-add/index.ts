import type { App } from 'vue';
import _IconListAdd from './icon-list-add.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListAdd.name = getComponentsPrefix() + _IconListAdd.name;

const IconListAdd = Object.assign(_IconListAdd, {
  install: (app: App) => {
    app.component(_IconListAdd.name, _IconListAdd);
  }
});

export default IconListAdd;