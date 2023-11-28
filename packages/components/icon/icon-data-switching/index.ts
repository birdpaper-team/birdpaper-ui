import type { App } from 'vue';
import _IconDataSwitching from './icon-data-switching.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataSwitching.name = getComponentsPrefix() + _IconDataSwitching.name;

const IconDataSwitching = Object.assign(_IconDataSwitching, {
  install: (app: App) => {
    app.component(_IconDataSwitching.name, _IconDataSwitching);
  }
});

export default IconDataSwitching;