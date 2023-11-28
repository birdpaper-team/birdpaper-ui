import type { App } from 'vue';
import _IconInvertLeft from './icon-invert-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInvertLeft.name = getComponentsPrefix() + _IconInvertLeft.name;

const IconInvertLeft = Object.assign(_IconInvertLeft, {
  install: (app: App) => {
    app.component(_IconInvertLeft.name, _IconInvertLeft);
  }
});

export default IconInvertLeft;