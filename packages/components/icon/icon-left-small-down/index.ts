import type { App } from 'vue';
import _IconLeftSmallDown from './icon-left-small-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftSmallDown.name = getComponentsPrefix() + _IconLeftSmallDown.name;

const IconLeftSmallDown = Object.assign(_IconLeftSmallDown, {
  install: (app: App) => {
    app.component(_IconLeftSmallDown.name, _IconLeftSmallDown);
  }
});

export default IconLeftSmallDown;