import type { App } from 'vue';
import _IconSixCircularConnection from './icon-six-circular-connection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSixCircularConnection.name = getComponentsPrefix() + _IconSixCircularConnection.name;

const IconSixCircularConnection = Object.assign(_IconSixCircularConnection, {
  install: (app: App) => {
    app.component(_IconSixCircularConnection.name, _IconSixCircularConnection);
  }
});

export default IconSixCircularConnection;