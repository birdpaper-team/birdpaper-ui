import type { App } from 'vue';
import _IconDeleteOne from './icon-delete-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteOne.name = getComponentsPrefix() + _IconDeleteOne.name;

const IconDeleteOne = Object.assign(_IconDeleteOne, {
  install: (app: App) => {
    app.component(_IconDeleteOne.name, _IconDeleteOne);
  }
});

export default IconDeleteOne;