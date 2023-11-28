import type { App } from 'vue';
import _IconRightC from './icon-right-c.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightC.name = getComponentsPrefix() + _IconRightC.name;

const IconRightC = Object.assign(_IconRightC, {
  install: (app: App) => {
    app.component(_IconRightC.name, _IconRightC);
  }
});

export default IconRightC;