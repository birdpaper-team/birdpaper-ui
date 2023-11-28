import type { App } from 'vue';
import _IconLeftTwo from './icon-left-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftTwo.name = getComponentsPrefix() + _IconLeftTwo.name;

const IconLeftTwo = Object.assign(_IconLeftTwo, {
  install: (app: App) => {
    app.component(_IconLeftTwo.name, _IconLeftTwo);
  }
});

export default IconLeftTwo;