import type { App } from 'vue';
import _IconDataOne from './icon-data-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataOne.name = getComponentsPrefix() + _IconDataOne.name;

const IconDataOne = Object.assign(_IconDataOne, {
  install: (app: App) => {
    app.component(_IconDataOne.name, _IconDataOne);
  }
});

export default IconDataOne;