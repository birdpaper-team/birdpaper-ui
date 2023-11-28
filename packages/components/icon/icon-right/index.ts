import type { App } from 'vue';
import _IconRight from './icon-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRight.name = getComponentsPrefix() + _IconRight.name;

const IconRight = Object.assign(_IconRight, {
  install: (app: App) => {
    app.component(_IconRight.name, _IconRight);
  }
});

export default IconRight;