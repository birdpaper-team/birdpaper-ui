import type { App } from 'vue';
import _IconNeural from './icon-neural.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNeural.name = getComponentsPrefix() + _IconNeural.name;

const IconNeural = Object.assign(_IconNeural, {
  install: (app: App) => {
    app.component(_IconNeural.name, _IconNeural);
  }
});

export default IconNeural;