import type { App } from 'vue';
import _IconLeftSmallUp from './icon-left-small-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftSmallUp.name = getComponentsPrefix() + _IconLeftSmallUp.name;

const IconLeftSmallUp = Object.assign(_IconLeftSmallUp, {
  install: (app: App) => {
    app.component(_IconLeftSmallUp.name, _IconLeftSmallUp);
  }
});

export default IconLeftSmallUp;