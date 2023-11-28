import type { App } from 'vue';
import _IconFirst from './icon-first.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFirst.name = getComponentsPrefix() + _IconFirst.name;

const IconFirst = Object.assign(_IconFirst, {
  install: (app: App) => {
    app.component(_IconFirst.name, _IconFirst);
  }
});

export default IconFirst;