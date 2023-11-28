import type { App } from 'vue';
import _IconDrag from './icon-drag.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDrag.name = getComponentsPrefix() + _IconDrag.name;

const IconDrag = Object.assign(_IconDrag, {
  install: (app: App) => {
    app.component(_IconDrag.name, _IconDrag);
  }
});

export default IconDrag;