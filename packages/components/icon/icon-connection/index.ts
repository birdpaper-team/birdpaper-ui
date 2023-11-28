import type { App } from 'vue';
import _IconConnection from './icon-connection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConnection.name = getComponentsPrefix() + _IconConnection.name;

const IconConnection = Object.assign(_IconConnection, {
  install: (app: App) => {
    app.component(_IconConnection.name, _IconConnection);
  }
});

export default IconConnection;