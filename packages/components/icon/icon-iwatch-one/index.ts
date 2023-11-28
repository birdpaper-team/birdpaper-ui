import type { App } from 'vue';
import _IconIwatchOne from './icon-iwatch-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIwatchOne.name = getComponentsPrefix() + _IconIwatchOne.name;

const IconIwatchOne = Object.assign(_IconIwatchOne, {
  install: (app: App) => {
    app.component(_IconIwatchOne.name, _IconIwatchOne);
  }
});

export default IconIwatchOne;