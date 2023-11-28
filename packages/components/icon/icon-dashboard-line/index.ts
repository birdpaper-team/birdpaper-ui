import type { App } from 'vue';
import _IconDashboardLine from './icon-dashboard-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDashboardLine.name = getComponentsPrefix() + _IconDashboardLine.name;

const IconDashboardLine = Object.assign(_IconDashboardLine, {
  install: (app: App) => {
    app.component(_IconDashboardLine.name, _IconDashboardLine);
  }
});

export default IconDashboardLine;