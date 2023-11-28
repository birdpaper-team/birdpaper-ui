import type { App } from 'vue';
import _IconDatabaseNetworkPoint from './icon-database-network-point.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseNetworkPoint.name = getComponentsPrefix() + _IconDatabaseNetworkPoint.name;

const IconDatabaseNetworkPoint = Object.assign(_IconDatabaseNetworkPoint, {
  install: (app: App) => {
    app.component(_IconDatabaseNetworkPoint.name, _IconDatabaseNetworkPoint);
  }
});

export default IconDatabaseNetworkPoint;