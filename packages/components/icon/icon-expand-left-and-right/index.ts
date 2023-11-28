import type { App } from 'vue';
import _IconExpandLeftAndRight from './icon-expand-left-and-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpandLeftAndRight.name = getComponentsPrefix() + _IconExpandLeftAndRight.name;

const IconExpandLeftAndRight = Object.assign(_IconExpandLeftAndRight, {
  install: (app: App) => {
    app.component(_IconExpandLeftAndRight.name, _IconExpandLeftAndRight);
  }
});

export default IconExpandLeftAndRight;