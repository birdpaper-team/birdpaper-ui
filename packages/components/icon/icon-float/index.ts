import type { App } from 'vue';
import _IconFloat from './icon-float.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFloat.name = getComponentsPrefix() + _IconFloat.name;

const IconFloat = Object.assign(_IconFloat, {
  install: (app: App) => {
    app.component(_IconFloat.name, _IconFloat);
  }
});

export default IconFloat;