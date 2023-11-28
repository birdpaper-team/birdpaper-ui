import type { App } from 'vue';
import _IconNmr from './icon-nmr.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNmr.name = getComponentsPrefix() + _IconNmr.name;

const IconNmr = Object.assign(_IconNmr, {
  install: (app: App) => {
    app.component(_IconNmr.name, _IconNmr);
  }
});

export default IconNmr;