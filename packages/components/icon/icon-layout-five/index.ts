import type { App } from 'vue';
import _IconLayoutFive from './icon-layout-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLayoutFive.name = getComponentsPrefix() + _IconLayoutFive.name;

const IconLayoutFive = Object.assign(_IconLayoutFive, {
  install: (app: App) => {
    app.component(_IconLayoutFive.name, _IconLayoutFive);
  }
});

export default IconLayoutFive;