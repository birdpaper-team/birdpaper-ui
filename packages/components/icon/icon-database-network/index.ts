import type { App } from 'vue';
import _IconDatabaseNetwork from './icon-database-network.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseNetwork.name = getComponentsPrefix() + _IconDatabaseNetwork.name;

const IconDatabaseNetwork = Object.assign(_IconDatabaseNetwork, {
  install: (app: App) => {
    app.component(_IconDatabaseNetwork.name, _IconDatabaseNetwork);
  }
});

export default IconDatabaseNetwork;