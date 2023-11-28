import type { App } from 'vue';
import _IconMoreApp from './icon-more-app.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoreApp.name = getComponentsPrefix() + _IconMoreApp.name;

const IconMoreApp = Object.assign(_IconMoreApp, {
  install: (app: App) => {
    app.component(_IconMoreApp.name, _IconMoreApp);
  }
});

export default IconMoreApp;