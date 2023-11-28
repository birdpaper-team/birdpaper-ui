import type { App } from 'vue';
import _IconWorkbench from './icon-workbench.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWorkbench.name = getComponentsPrefix() + _IconWorkbench.name;

const IconWorkbench = Object.assign(_IconWorkbench, {
  install: (app: App) => {
    app.component(_IconWorkbench.name, _IconWorkbench);
  }
});

export default IconWorkbench;