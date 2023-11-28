import type { App } from 'vue';
import _IconIpo from './icon-ipo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIpo.name = getComponentsPrefix() + _IconIpo.name;

const IconIpo = Object.assign(_IconIpo, {
  install: (app: App) => {
    app.component(_IconIpo.name, _IconIpo);
  }
});

export default IconIpo;