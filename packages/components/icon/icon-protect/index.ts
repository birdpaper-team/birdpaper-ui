import type { App } from 'vue';
import _IconProtect from './icon-protect.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconProtect.name = getComponentsPrefix() + _IconProtect.name;

const IconProtect = Object.assign(_IconProtect, {
  install: (app: App) => {
    app.component(_IconProtect.name, _IconProtect);
  }
});

export default IconProtect;