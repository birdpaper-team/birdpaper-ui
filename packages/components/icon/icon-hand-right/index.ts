import type { App } from 'vue';
import _IconHandRight from './icon-hand-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandRight.name = getComponentsPrefix() + _IconHandRight.name;

const IconHandRight = Object.assign(_IconHandRight, {
  install: (app: App) => {
    app.component(_IconHandRight.name, _IconHandRight);
  }
});

export default IconHandRight;