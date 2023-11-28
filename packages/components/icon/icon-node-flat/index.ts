import type { App } from 'vue';
import _IconNodeFlat from './icon-node-flat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNodeFlat.name = getComponentsPrefix() + _IconNodeFlat.name;

const IconNodeFlat = Object.assign(_IconNodeFlat, {
  install: (app: App) => {
    app.component(_IconNodeFlat.name, _IconNodeFlat);
  }
});

export default IconNodeFlat;