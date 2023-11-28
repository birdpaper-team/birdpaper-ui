import type { App } from 'vue';
import _IconReport from './icon-report.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReport.name = getComponentsPrefix() + _IconReport.name;

const IconReport = Object.assign(_IconReport, {
  install: (app: App) => {
    app.component(_IconReport.name, _IconReport);
  }
});

export default IconReport;