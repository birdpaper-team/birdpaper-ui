import type { App } from 'vue';
import _IconRemindDisable from './icon-remind-disable.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRemindDisable.name = getComponentsPrefix() + _IconRemindDisable.name;

const IconRemindDisable = Object.assign(_IconRemindDisable, {
  install: (app: App) => {
    app.component(_IconRemindDisable.name, _IconRemindDisable);
  }
});

export default IconRemindDisable;