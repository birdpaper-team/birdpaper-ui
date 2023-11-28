import type { App } from 'vue';
import _IconMaskTwo from './icon-mask-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaskTwo.name = getComponentsPrefix() + _IconMaskTwo.name;

const IconMaskTwo = Object.assign(_IconMaskTwo, {
  install: (app: App) => {
    app.component(_IconMaskTwo.name, _IconMaskTwo);
  }
});

export default IconMaskTwo;