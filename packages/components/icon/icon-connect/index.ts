import type { App } from 'vue';
import _IconConnect from './icon-connect.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConnect.name = getComponentsPrefix() + _IconConnect.name;

const IconConnect = Object.assign(_IconConnect, {
  install: (app: App) => {
    app.component(_IconConnect.name, _IconConnect);
  }
});

export default IconConnect;