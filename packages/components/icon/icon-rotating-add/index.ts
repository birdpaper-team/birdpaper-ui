import type { App } from 'vue';
import _IconRotatingAdd from './icon-rotating-add.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotatingAdd.name = getComponentsPrefix() + _IconRotatingAdd.name;

const IconRotatingAdd = Object.assign(_IconRotatingAdd, {
  install: (app: App) => {
    app.component(_IconRotatingAdd.name, _IconRotatingAdd);
  }
});

export default IconRotatingAdd;