import type { App } from 'vue';
import _IconFive from './icon-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFive.name = getComponentsPrefix() + _IconFive.name;

const IconFive = Object.assign(_IconFive, {
  install: (app: App) => {
    app.component(_IconFive.name, _IconFive);
  }
});

export default IconFive;