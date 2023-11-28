import type { App } from 'vue';
import _IconAlignTextRight from './icon-align-text-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextRight.name = getComponentsPrefix() + _IconAlignTextRight.name;

const IconAlignTextRight = Object.assign(_IconAlignTextRight, {
  install: (app: App) => {
    app.component(_IconAlignTextRight.name, _IconAlignTextRight);
  }
});

export default IconAlignTextRight;