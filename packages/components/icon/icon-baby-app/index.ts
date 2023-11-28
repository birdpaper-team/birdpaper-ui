import type { App } from 'vue';
import _IconBabyApp from './icon-baby-app.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyApp.name = getComponentsPrefix() + _IconBabyApp.name;

const IconBabyApp = Object.assign(_IconBabyApp, {
  install: (app: App) => {
    app.component(_IconBabyApp.name, _IconBabyApp);
  }
});

export default IconBabyApp;