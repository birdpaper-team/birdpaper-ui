import type { App } from 'vue';
import _IconDivingSuit from './icon-diving-suit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDivingSuit.name = getComponentsPrefix() + _IconDivingSuit.name;

const IconDivingSuit = Object.assign(_IconDivingSuit, {
  install: (app: App) => {
    app.component(_IconDivingSuit.name, _IconDivingSuit);
  }
});

export default IconDivingSuit;