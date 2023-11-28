import type { App } from 'vue';
import _IconMonitorOne from './icon-monitor-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMonitorOne.name = getComponentsPrefix() + _IconMonitorOne.name;

const IconMonitorOne = Object.assign(_IconMonitorOne, {
  install: (app: App) => {
    app.component(_IconMonitorOne.name, _IconMonitorOne);
  }
});

export default IconMonitorOne;