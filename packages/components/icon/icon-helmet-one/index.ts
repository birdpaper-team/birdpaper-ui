import type { App } from 'vue';
import _IconHelmetOne from './icon-helmet-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHelmetOne.name = getComponentsPrefix() + _IconHelmetOne.name;

const IconHelmetOne = Object.assign(_IconHelmetOne, {
  install: (app: App) => {
    app.component(_IconHelmetOne.name, _IconHelmetOne);
  }
});

export default IconHelmetOne;