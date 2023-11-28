import type { App } from 'vue';
import _IconCopyright from './icon-copyright.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCopyright.name = getComponentsPrefix() + _IconCopyright.name;

const IconCopyright = Object.assign(_IconCopyright, {
  install: (app: App) => {
    app.component(_IconCopyright.name, _IconCopyright);
  }
});

export default IconCopyright;