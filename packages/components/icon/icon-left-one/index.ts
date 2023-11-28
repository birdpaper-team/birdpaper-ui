import type { App } from 'vue';
import _IconLeftOne from './icon-left-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftOne.name = getComponentsPrefix() + _IconLeftOne.name;

const IconLeftOne = Object.assign(_IconLeftOne, {
  install: (app: App) => {
    app.component(_IconLeftOne.name, _IconLeftOne);
  }
});

export default IconLeftOne;