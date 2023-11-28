import type { App } from 'vue';
import _IconDateComesBack from './icon-date-comes-back.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDateComesBack.name = getComponentsPrefix() + _IconDateComesBack.name;

const IconDateComesBack = Object.assign(_IconDateComesBack, {
  install: (app: App) => {
    app.component(_IconDateComesBack.name, _IconDateComesBack);
  }
});

export default IconDateComesBack;