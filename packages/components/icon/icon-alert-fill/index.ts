import type { App } from 'vue';
import _IconAlertFill from './icon-alert-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlertFill.name = getComponentsPrefix() + _IconAlertFill.name;

const IconAlertFill = Object.assign(_IconAlertFill, {
  install: (app: App) => {
    app.component(_IconAlertFill.name, _IconAlertFill);
  }
});

export default IconAlertFill;