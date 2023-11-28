import type { App } from 'vue';
import _IconFourRoundPointConnection from './icon-four-round-point-connection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFourRoundPointConnection.name = getComponentsPrefix() + _IconFourRoundPointConnection.name;

const IconFourRoundPointConnection = Object.assign(_IconFourRoundPointConnection, {
  install: (app: App) => {
    app.component(_IconFourRoundPointConnection.name, _IconFourRoundPointConnection);
  }
});

export default IconFourRoundPointConnection;