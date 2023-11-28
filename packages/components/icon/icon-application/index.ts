import type { App } from 'vue';
import _IconApplication from './icon-application.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconApplication.name = getComponentsPrefix() + _IconApplication.name;

const IconApplication = Object.assign(_IconApplication, {
  install: (app: App) => {
    app.component(_IconApplication.name, _IconApplication);
  }
});

export default IconApplication;