import type { App } from 'vue';
import _IconLayoutOne from './icon-layout-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLayoutOne.name = getComponentsPrefix() + _IconLayoutOne.name;

const IconLayoutOne = Object.assign(_IconLayoutOne, {
  install: (app: App) => {
    app.component(_IconLayoutOne.name, _IconLayoutOne);
  }
});

export default IconLayoutOne;