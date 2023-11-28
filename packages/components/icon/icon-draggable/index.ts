import type { App } from 'vue';
import _IconDraggable from './icon-draggable.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDraggable.name = getComponentsPrefix() + _IconDraggable.name;

const IconDraggable = Object.assign(_IconDraggable, {
  install: (app: App) => {
    app.component(_IconDraggable.name, _IconDraggable);
  }
});

export default IconDraggable;