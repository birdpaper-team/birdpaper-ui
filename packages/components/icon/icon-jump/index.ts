import type { App } from 'vue';
import _IconJump from './icon-jump.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconJump.name = getComponentsPrefix() + _IconJump.name;

const IconJump = Object.assign(_IconJump, {
  install: (app: App) => {
    app.component(_IconJump.name, _IconJump);
  }
});

export default IconJump;