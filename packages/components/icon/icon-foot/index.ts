import type { App } from 'vue';
import _IconFoot from './icon-foot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFoot.name = getComponentsPrefix() + _IconFoot.name;

const IconFoot = Object.assign(_IconFoot, {
  install: (app: App) => {
    app.component(_IconFoot.name, _IconFoot);
  }
});

export default IconFoot;