import type { App } from 'vue';
import _IconSalesReport from './icon-sales-report.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSalesReport.name = getComponentsPrefix() + _IconSalesReport.name;

const IconSalesReport = Object.assign(_IconSalesReport, {
  install: (app: App) => {
    app.component(_IconSalesReport.name, _IconSalesReport);
  }
});

export default IconSalesReport;