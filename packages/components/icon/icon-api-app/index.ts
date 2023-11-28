import type { App } from 'vue';
import _IconApiApp from './icon-api-app.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconApiApp.name = getComponentsPrefix() + _IconApiApp.name;

const IconApiApp = Object.assign(_IconApiApp, {
  install: (app: App) => {
    app.component(_IconApiApp.name, _IconApiApp);
  }
});

export default IconApiApp;