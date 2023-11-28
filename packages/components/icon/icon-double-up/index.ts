import type { App } from 'vue';
import _IconDoubleUp from './icon-double-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoubleUp.name = getComponentsPrefix() + _IconDoubleUp.name;

const IconDoubleUp = Object.assign(_IconDoubleUp, {
  install: (app: App) => {
    app.component(_IconDoubleUp.name, _IconDoubleUp);
  }
});

export default IconDoubleUp;