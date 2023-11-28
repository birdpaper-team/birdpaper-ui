import type { App } from 'vue';
import _IconFourPointConnection from './icon-four-point-connection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFourPointConnection.name = getComponentsPrefix() + _IconFourPointConnection.name;

const IconFourPointConnection = Object.assign(_IconFourPointConnection, {
  install: (app: App) => {
    app.component(_IconFourPointConnection.name, _IconFourPointConnection);
  }
});

export default IconFourPointConnection;