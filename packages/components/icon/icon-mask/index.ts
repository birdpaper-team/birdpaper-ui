import type { App } from 'vue';
import _IconMask from './icon-mask.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMask.name = getComponentsPrefix() + _IconMask.name;

const IconMask = Object.assign(_IconMask, {
  install: (app: App) => {
    app.component(_IconMask.name, _IconMask);
  }
});

export default IconMask;