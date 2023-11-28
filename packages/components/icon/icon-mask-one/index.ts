import type { App } from 'vue';
import _IconMaskOne from './icon-mask-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaskOne.name = getComponentsPrefix() + _IconMaskOne.name;

const IconMaskOne = Object.assign(_IconMaskOne, {
  install: (app: App) => {
    app.component(_IconMaskOne.name, _IconMaskOne);
  }
});

export default IconMaskOne;