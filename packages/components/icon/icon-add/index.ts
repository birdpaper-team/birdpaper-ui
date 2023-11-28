import type { App } from 'vue';
import _IconAdd from './icon-add.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdd.name = getComponentsPrefix() + _IconAdd.name;

const IconAdd = Object.assign(_IconAdd, {
  install: (app: App) => {
    app.component(_IconAdd.name, _IconAdd);
  }
});

export default IconAdd;