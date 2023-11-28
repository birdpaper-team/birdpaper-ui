import type { App } from 'vue';
import _IconLeftSmall from './icon-left-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftSmall.name = getComponentsPrefix() + _IconLeftSmall.name;

const IconLeftSmall = Object.assign(_IconLeftSmall, {
  install: (app: App) => {
    app.component(_IconLeftSmall.name, _IconLeftSmall);
  }
});

export default IconLeftSmall;