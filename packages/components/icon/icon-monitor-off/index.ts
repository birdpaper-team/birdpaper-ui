import type { App } from 'vue';
import _IconMonitorOff from './icon-monitor-off.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMonitorOff.name = getComponentsPrefix() + _IconMonitorOff.name;

const IconMonitorOff = Object.assign(_IconMonitorOff, {
  install: (app: App) => {
    app.component(_IconMonitorOff.name, _IconMonitorOff);
  }
});

export default IconMonitorOff;