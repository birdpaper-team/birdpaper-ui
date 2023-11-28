import type { App } from 'vue';
import _IconRazor from './icon-razor.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRazor.name = getComponentsPrefix() + _IconRazor.name;

const IconRazor = Object.assign(_IconRazor, {
  install: (app: App) => {
    app.component(_IconRazor.name, _IconRazor);
  }
});

export default IconRazor;