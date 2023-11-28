import type { App } from 'vue';
import _IconDown from './icon-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDown.name = getComponentsPrefix() + _IconDown.name;

const IconDown = Object.assign(_IconDown, {
  install: (app: App) => {
    app.component(_IconDown.name, _IconDown);
  }
});

export default IconDown;