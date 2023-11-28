import type { App } from 'vue';
import _IconLog from './icon-log.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLog.name = getComponentsPrefix() + _IconLog.name;

const IconLog = Object.assign(_IconLog, {
  install: (app: App) => {
    app.component(_IconLog.name, _IconLog);
  }
});

export default IconLog;