import type { App } from 'vue';
import _IconDataAll from './icon-data-all.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataAll.name = getComponentsPrefix() + _IconDataAll.name;

const IconDataAll = Object.assign(_IconDataAll, {
  install: (app: App) => {
    app.component(_IconDataAll.name, _IconDataAll);
  }
});

export default IconDataAll;