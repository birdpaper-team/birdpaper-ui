import type { App } from 'vue';
import _IconSelfie from './icon-selfie.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSelfie.name = getComponentsPrefix() + _IconSelfie.name;

const IconSelfie = Object.assign(_IconSelfie, {
  install: (app: App) => {
    app.component(_IconSelfie.name, _IconSelfie);
  }
});

export default IconSelfie;