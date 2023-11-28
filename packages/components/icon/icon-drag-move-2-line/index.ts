import type { App } from 'vue';
import _IconDragMove2Line from './icon-drag-move-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDragMove2Line.name = getComponentsPrefix() + _IconDragMove2Line.name;

const IconDragMove2Line = Object.assign(_IconDragMove2Line, {
  install: (app: App) => {
    app.component(_IconDragMove2Line.name, _IconDragMove2Line);
  }
});

export default IconDragMove2Line;