import type { App } from 'vue';
import _IconAlignTextLeft from './icon-align-text-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextLeft.name = getComponentsPrefix() + _IconAlignTextLeft.name;

const IconAlignTextLeft = Object.assign(_IconAlignTextLeft, {
  install: (app: App) => {
    app.component(_IconAlignTextLeft.name, _IconAlignTextLeft);
  }
});

export default IconAlignTextLeft;