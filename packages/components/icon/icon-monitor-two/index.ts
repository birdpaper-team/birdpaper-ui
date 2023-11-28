import type { App } from 'vue';
import _IconMonitorTwo from './icon-monitor-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMonitorTwo.name = getComponentsPrefix() + _IconMonitorTwo.name;

const IconMonitorTwo = Object.assign(_IconMonitorTwo, {
  install: (app: App) => {
    app.component(_IconMonitorTwo.name, _IconMonitorTwo);
  }
});

export default IconMonitorTwo;