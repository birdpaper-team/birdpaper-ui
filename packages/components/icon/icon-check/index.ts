import type { App } from 'vue';
import _IconCheck from './icon-check.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheck.name = getComponentsPrefix() + _IconCheck.name;

const IconCheck = Object.assign(_IconCheck, {
  install: (app: App) => {
    app.component(_IconCheck.name, _IconCheck);
  }
});

export default IconCheck;