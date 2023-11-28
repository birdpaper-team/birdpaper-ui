import type { App } from 'vue';
import _IconPhoneBooth from './icon-phone-booth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneBooth.name = getComponentsPrefix() + _IconPhoneBooth.name;

const IconPhoneBooth = Object.assign(_IconPhoneBooth, {
  install: (app: App) => {
    app.component(_IconPhoneBooth.name, _IconPhoneBooth);
  }
});

export default IconPhoneBooth;