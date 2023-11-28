import type { App } from 'vue';
import _IconDataServer from './icon-data-server.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataServer.name = getComponentsPrefix() + _IconDataServer.name;

const IconDataServer = Object.assign(_IconDataServer, {
  install: (app: App) => {
    app.component(_IconDataServer.name, _IconDataServer);
  }
});

export default IconDataServer;