import type { App } from 'vue';
import _IconRotateOne from './icon-rotate-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotateOne.name = getComponentsPrefix() + _IconRotateOne.name;

const IconRotateOne = Object.assign(_IconRotateOne, {
  install: (app: App) => {
    app.component(_IconRotateOne.name, _IconRotateOne);
  }
});

export default IconRotateOne;