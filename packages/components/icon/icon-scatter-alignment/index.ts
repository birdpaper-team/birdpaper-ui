import type { App } from 'vue';
import _IconScatterAlignment from './icon-scatter-alignment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScatterAlignment.name = getComponentsPrefix() + _IconScatterAlignment.name;

const IconScatterAlignment = Object.assign(_IconScatterAlignment, {
  install: (app: App) => {
    app.component(_IconScatterAlignment.name, _IconScatterAlignment);
  }
});

export default IconScatterAlignment;