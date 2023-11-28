import type { App } from 'vue';
import _IconCandy from './icon-candy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCandy.name = getComponentsPrefix() + _IconCandy.name;

const IconCandy = Object.assign(_IconCandy, {
  install: (app: App) => {
    app.component(_IconCandy.name, _IconCandy);
  }
});

export default IconCandy;