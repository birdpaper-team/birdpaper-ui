import type { App } from 'vue';
import _IconRipple from './icon-ripple.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRipple.name = getComponentsPrefix() + _IconRipple.name;

const IconRipple = Object.assign(_IconRipple, {
  install: (app: App) => {
    app.component(_IconRipple.name, _IconRipple);
  }
});

export default IconRipple;