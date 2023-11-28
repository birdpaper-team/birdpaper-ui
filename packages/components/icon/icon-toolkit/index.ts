import type { App } from 'vue';
import _IconToolkit from './icon-toolkit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToolkit.name = getComponentsPrefix() + _IconToolkit.name;

const IconToolkit = Object.assign(_IconToolkit, {
  install: (app: App) => {
    app.component(_IconToolkit.name, _IconToolkit);
  }
});

export default IconToolkit;