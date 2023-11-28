import type { App } from 'vue';
import _IconFm from './icon-fm.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFm.name = getComponentsPrefix() + _IconFm.name;

const IconFm = Object.assign(_IconFm, {
  install: (app: App) => {
    app.component(_IconFm.name, _IconFm);
  }
});

export default IconFm;