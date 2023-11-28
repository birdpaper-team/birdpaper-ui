import type { App } from 'vue';
import _IconUpAndDown from './icon-up-and-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpAndDown.name = getComponentsPrefix() + _IconUpAndDown.name;

const IconUpAndDown = Object.assign(_IconUpAndDown, {
  install: (app: App) => {
    app.component(_IconUpAndDown.name, _IconUpAndDown);
  }
});

export default IconUpAndDown;