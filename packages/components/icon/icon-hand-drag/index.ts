import type { App } from 'vue';
import _IconHandDrag from './icon-hand-drag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandDrag.name = getComponentsPrefix() + _IconHandDrag.name;

const IconHandDrag = Object.assign(_IconHandDrag, {
  install: (app: App) => {
    app.component(_IconHandDrag.name, _IconHandDrag);
  }
});

export default IconHandDrag;