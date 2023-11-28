import type { App } from 'vue';
import _IconFacialMask from './icon-facial-mask.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFacialMask.name = getComponentsPrefix() + _IconFacialMask.name;

const IconFacialMask = Object.assign(_IconFacialMask, {
  install: (app: App) => {
    app.component(_IconFacialMask.name, _IconFacialMask);
  }
});

export default IconFacialMask;