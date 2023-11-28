import type { App } from 'vue';
import _IconMaximum from './icon-maximum.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaximum.name = getComponentsPrefix() + _IconMaximum.name;

const IconMaximum = Object.assign(_IconMaximum, {
  install: (app: App) => {
    app.component(_IconMaximum.name, _IconMaximum);
  }
});

export default IconMaximum;