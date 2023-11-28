import type { App } from 'vue';
import _IconAlignLeft from './icon-align-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignLeft.name = getComponentsPrefix() + _IconAlignLeft.name;

const IconAlignLeft = Object.assign(_IconAlignLeft, {
  install: (app: App) => {
    app.component(_IconAlignLeft.name, _IconAlignLeft);
  }
});

export default IconAlignLeft;