import type { App } from 'vue';
import _IconFilterOne from './icon-filter-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFilterOne.name = getComponentsPrefix() + _IconFilterOne.name;

const IconFilterOne = Object.assign(_IconFilterOne, {
  install: (app: App) => {
    app.component(_IconFilterOne.name, _IconFilterOne);
  }
});

export default IconFilterOne;