import type { App } from 'vue';
import _IconDraggable from './icon-draggable.vue';

const IconDraggable = Object.assign(_IconDraggable, {
  install: (app: App) => {
    app.component(_IconDraggable.name, _IconDraggable);
  }
});

export default IconDraggable;