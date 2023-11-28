import type { App } from 'vue';
import _IconAcoustic from './icon-acoustic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAcoustic.name = getComponentsPrefix() + _IconAcoustic.name;

const IconAcoustic = Object.assign(_IconAcoustic, {
  install: (app: App) => {
    app.component(_IconAcoustic.name, _IconAcoustic);
  }
});

export default IconAcoustic;