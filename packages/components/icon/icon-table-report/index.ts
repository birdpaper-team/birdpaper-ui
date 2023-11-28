import type { App } from 'vue';
import _IconTableReport from './icon-table-report.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTableReport.name = getComponentsPrefix() + _IconTableReport.name;

const IconTableReport = Object.assign(_IconTableReport, {
  install: (app: App) => {
    app.component(_IconTableReport.name, _IconTableReport);
  }
});

export default IconTableReport;