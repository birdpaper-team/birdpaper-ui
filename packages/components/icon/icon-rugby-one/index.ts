import type { App } from 'vue';
import _IconRugbyOne from './icon-rugby-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRugbyOne.name = getComponentsPrefix() + _IconRugbyOne.name;

const IconRugbyOne = Object.assign(_IconRugbyOne, {
  install: (app: App) => {
    app.component(_IconRugbyOne.name, _IconRugbyOne);
  }
});

export default IconRugbyOne;