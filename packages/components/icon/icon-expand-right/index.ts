import type { App } from 'vue';
import _IconExpandRight from './icon-expand-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpandRight.name = getComponentsPrefix() + _IconExpandRight.name;

const IconExpandRight = Object.assign(_IconExpandRight, {
  install: (app: App) => {
    app.component(_IconExpandRight.name, _IconExpandRight);
  }
});

export default IconExpandRight;