import type { App } from 'vue';
import _IconHi from './icon-hi.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHi.name = getComponentsPrefix() + _IconHi.name;

const IconHi = Object.assign(_IconHi, {
  install: (app: App) => {
    app.component(_IconHi.name, _IconHi);
  }
});

export default IconHi;