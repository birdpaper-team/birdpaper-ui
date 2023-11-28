import type { App } from 'vue';
import _IconRectangularCircularConnection from './icon-rectangular-circular-connection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangularCircularConnection.name = getComponentsPrefix() + _IconRectangularCircularConnection.name;

const IconRectangularCircularConnection = Object.assign(_IconRectangularCircularConnection, {
  install: (app: App) => {
    app.component(_IconRectangularCircularConnection.name, _IconRectangularCircularConnection);
  }
});

export default IconRectangularCircularConnection;