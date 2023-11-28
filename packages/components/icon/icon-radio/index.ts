import type { App } from 'vue';
import _IconRadio from './icon-radio.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadio.name = getComponentsPrefix() + _IconRadio.name;

const IconRadio = Object.assign(_IconRadio, {
  install: (app: App) => {
    app.component(_IconRadio.name, _IconRadio);
  }
});

export default IconRadio;