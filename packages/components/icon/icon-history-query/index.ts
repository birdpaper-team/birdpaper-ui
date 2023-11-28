import type { App } from 'vue';
import _IconHistoryQuery from './icon-history-query.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHistoryQuery.name = getComponentsPrefix() + _IconHistoryQuery.name;

const IconHistoryQuery = Object.assign(_IconHistoryQuery, {
  install: (app: App) => {
    app.component(_IconHistoryQuery.name, _IconHistoryQuery);
  }
});

export default IconHistoryQuery;