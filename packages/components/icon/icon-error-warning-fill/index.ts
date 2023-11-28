import type { App } from 'vue';
import _IconErrorWarningFill from './icon-error-warning-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconErrorWarningFill.name = getComponentsPrefix() + _IconErrorWarningFill.name;

const IconErrorWarningFill = Object.assign(_IconErrorWarningFill, {
  install: (app: App) => {
    app.component(_IconErrorWarningFill.name, _IconErrorWarningFill);
  }
});

export default IconErrorWarningFill;