import type { App } from 'vue';
import _IconRotate from './icon-rotate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotate.name = getComponentsPrefix() + _IconRotate.name;

const IconRotate = Object.assign(_IconRotate, {
  install: (app: App) => {
    app.component(_IconRotate.name, _IconRotate);
  }
});

export default IconRotate;