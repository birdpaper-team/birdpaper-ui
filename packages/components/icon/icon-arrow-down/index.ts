import type { App } from 'vue';
import _IconArrowDown from './icon-arrow-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowDown.name = getComponentsPrefix() + _IconArrowDown.name;

const IconArrowDown = Object.assign(_IconArrowDown, {
  install: (app: App) => {
    app.component(_IconArrowDown.name, _IconArrowDown);
  }
});

export default IconArrowDown;