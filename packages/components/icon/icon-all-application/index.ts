import type { App } from 'vue';
import _IconAllApplication from './icon-all-application.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAllApplication.name = getComponentsPrefix() + _IconAllApplication.name;

const IconAllApplication = Object.assign(_IconAllApplication, {
  install: (app: App) => {
    app.component(_IconAllApplication.name, _IconAllApplication);
  }
});

export default IconAllApplication;