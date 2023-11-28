import type { App } from 'vue';
import _IconMacadamiaNut from './icon-macadamia-nut.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMacadamiaNut.name = getComponentsPrefix() + _IconMacadamiaNut.name;

const IconMacadamiaNut = Object.assign(_IconMacadamiaNut, {
  install: (app: App) => {
    app.component(_IconMacadamiaNut.name, _IconMacadamiaNut);
  }
});

export default IconMacadamiaNut;